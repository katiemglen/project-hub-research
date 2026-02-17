import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Project Hub System — Deep Research & Recommendations",
  description: "Comprehensive research and recommendations for Katie & Chad's Command Center Dashboard. Analyzing Notion, Linear, Basecamp, ClickUp, and modern project management patterns.",
  openGraph: {
    title: "Project Hub System — Deep Research & Recommendations",
    description: "Analyzing modern project management patterns for a Next.js + Convex command center.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
