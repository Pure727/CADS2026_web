import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("https://routine.example/", {
      headers: {
        accept: "text/html",
        "x-forwarded-host": "routine.example",
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
}

test("server-renders the ROUTINE download landing page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html[^>]*lang="ko"/i);
  assert.match(html, /ROUTINE \| 학생을 위한 통합 스케줄러/);
  assert.match(html, /<h1>ROUTINE<\/h1>/);
  assert.match(html, />화면<\/a>/);
  assert.doesNotMatch(html, /오늘의 흐름을 한눈에, ROUTINE/);
  assert.match(html, /Android용 다운로드/);
  assert.match(html, /ROUTINE-v1\.0-20260729\.apk/);
  assert.match(html, /나이스 시간표를 그대로/);
  assert.match(html, /학사일정과 나의 계획/);
  assert.match(html, /현재 수업, TODO와 자주 쓰는 기능을 한눈에/);
  assert.match(html, /3학년 11반 시간표/);
  assert.match(html, /ROUTINE의 실제 화면을 그대로 확인해 보세요/);
  assert.match(html, /두 화면 모두에 자연스럽게 맞춰지는 UI/);
  assert.match(html, /좁은 화면과 넓은 화면 어디에서든/);
  assert.match(html, /반응형 레이아웃/);
  assert.match(
    html,
    /갤럭시 Z Fold의 커버 화면과 펼친 화면을 활용한 적용 예시/,
  );
  assert.match(html, /\/screenshots\/responsive-ui-showcase\.png/);
  assert.doesNotMatch(html, /앱과 닮은 웹, 웹에서 만나는 앱/);
  assert.match(html, /현재 파일은 개발자 디버그 서명의 테스트 배포판/);
  assert.match(html, /약 23\.1MB/);
  assert.match(html, /198E7DD3/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
});

test("emits absolute social preview metadata from the request host", async () => {
  const response = await render();
  const html = await response.text();

  assert.match(html, /https:\/\/routine\.example\/og\.png/);
  assert.match(html, /summary_large_image/);
  assert.match(html, /ROUTINE 학생 통합 스케줄러/);
});

test("builds a script-free GitHub Pages artifact with project paths", async () => {
  const html = await readFile(
    new URL("../pages-dist/index.html", import.meta.url),
    "utf8",
  );

  assert.match(html, /ROUTINE \| 학생을 위한 통합 스케줄러/);
  assert.match(html, /https:\/\/pure727\.github\.io\/CADS2026_web\/og\.png/);
  assert.match(html, /\/CADS2026_web\/assets\//);
  assert.match(html, /\/CADS2026_web\/screenshots\/home\.png/);
  assert.match(
    html,
    /\/CADS2026_web\/screenshots\/responsive-ui-showcase\.png/,
  );
  assert.doesNotMatch(html, /<script\b/i);
  await access(new URL("../pages-dist/.nojekyll", import.meta.url));
  await access(new URL("../pages-dist/og.png", import.meta.url));
  await access(
    new URL(
      "../pages-dist/screenshots/responsive-ui-showcase.png",
      import.meta.url,
    ),
  );
});
