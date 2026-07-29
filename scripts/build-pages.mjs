import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const clientRoot = resolve(projectRoot, "dist", "client");
const pagesRoot = resolve(projectRoot, "pages-dist");
const siteUrl = "https://pure727.github.io/CADS2026_web";
const basePath = "/CADS2026_web";

process.env.SITE_URL = siteUrl;

await rm(pagesRoot, { recursive: true, force: true });
await mkdir(pagesRoot, { recursive: true });
await cp(clientRoot, pagesRoot, { recursive: true });

const workerUrl = pathToFileURL(resolve(projectRoot, "dist", "server", "index.js"));
workerUrl.searchParams.set("pages", `${process.pid}-${Date.now()}`);
const { default: worker } = await import(workerUrl.href);

const response = await worker.fetch(
  new Request("https://pure727.github.io/", {
    headers: {
      accept: "text/html",
      "x-forwarded-host": "pure727.github.io",
      "x-forwarded-proto": "https",
    },
  }),
  {
    ASSETS: {
      fetch: async () => new Response("Not found", { status: 404 }),
    },
  },
  {
    waitUntil() {},
    passThroughOnException() {},
  },
);

if (!response.ok) {
  throw new Error(`ROUTINE static render failed with status ${response.status}`);
}

let html = await response.text();
html = html
  .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
  .replace(/<link\b(?=[^>]*\brel=["']modulepreload["'])[^>]*>/gi, "")
  .replaceAll('="/', `="${basePath}/`);

await Promise.all([
  writeFile(resolve(pagesRoot, "index.html"), html, "utf8"),
  writeFile(resolve(pagesRoot, "404.html"), html, "utf8"),
  writeFile(resolve(pagesRoot, ".nojekyll"), "", "utf8"),
]);
