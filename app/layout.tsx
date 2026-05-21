import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jamen Mama | Frontend Developer",
  description:
    "Portfolio of Jamen Mama, a frontend developer building React, Next.js, Angular, TypeScript, and Firebase web applications.",
  openGraph: {
    title: "Jamen Mama | Frontend Developer",
    description:
      "Frontend developer portfolio showcasing React, Next.js, Angular, Firebase, dashboards, admin tools, and customer-facing products.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
