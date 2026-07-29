import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbfaff" },
    { media: "(prefers-color-scheme: dark)", color: "#121016" },
  ],
};

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "localhost:3000";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.startsWith("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;
  const publicUrl = process.env.SITE_URL ?? origin;
  const title = "ROUTINE | 학생을 위한 통합 스케줄러";
  const description =
    "시간표, 학사일정, 알림, 백업까지. Android용 ROUTINE을 다운로드하세요.";

  return {
    title,
    description,
    applicationName: "ROUTINE",
    icons: {
      icon: "/app-icon.png",
      shortcut: "/app-icon.png",
      apple: "/app-icon.png",
    },
    openGraph: {
      type: "website",
      locale: "ko_KR",
      url: publicUrl,
      siteName: "ROUTINE",
      title,
      description,
      images: [
        {
          url: `${publicUrl}/og.png`,
          width: 1200,
          height: 630,
          alt: "ROUTINE 학생 통합 스케줄러",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${publicUrl}/og.png`],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
