import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";
import AppProviders from "@/components/providers/AppProviders";
import "./globals.scss";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Jamen Mama | Senior Frontend Developer",
  description:
    "Senior Frontend Developer with 8+ years of experience building scalable web applications using React.js, Next.js, Angular, TypeScript, and modern frontend technologies.",
  keywords: [
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Angular Developer",
    "TypeScript Developer",
    "Senior Frontend Engineer",
  ],
  authors: [{ name: "Jamen Mama" }],
  creator: "Jamen Mama",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Jamen Mama | Senior Frontend Developer",
    description:
      "Senior Frontend Engineer helping startups and enterprises build scalable digital products.",
    siteName: "Jamen Mama Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jamen Mama | Senior Frontend Developer",
    description:
      "Senior Frontend Engineer helping startups and enterprises build scalable digital products.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jamen Mama",
    jobTitle: "Senior Frontend Developer",
    email: "jamen.dev@gmail.com",
    telephone: "+63-995-031-5549",
    address: {
      "@type": "PostalAddress",
      addressLocality: "South Cotabato",
      addressCountry: "PH",
    },
    url: "https://jamenmama.dev",
    sameAs: [
      "https://www.linkedin.com/in/jamenmama/",
      "https://github.com/nemaj",
    ],
    knowsAbout: [
      "React.js",
      "Next.js",
      "Angular",
      "TypeScript",
      "Frontend Development",
    ],
  };

  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <AppProviders>
          <ScrollProgress />
          <Header />
          {children}
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}
