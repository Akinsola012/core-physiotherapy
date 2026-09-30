import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Core Physiotherapy — Specialized Home Physiotherapy for Your Parents in Nigeria",
  description:
    "Licensed geriatric physiotherapy for your parents in Nigeria. Home visits with video proof of every session, weekly digital reports, and a direct line to your physiotherapist.",
  keywords: [
    "physiotherapy Nigeria",
    "home physiotherapy Nigeria",
    "geriatric physiotherapy",
    "elderly care Nigeria",
    "diaspora healthcare Nigeria",
    "stroke recovery Nigeria",
    "fall prevention elderly"
  ]
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}