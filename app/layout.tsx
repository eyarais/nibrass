import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "نبراس Academy",
  description: "A bilingual landing page for Nibras, an online Islamic academy for children."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
