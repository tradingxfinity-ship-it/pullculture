import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const SITE_URL = "https://pullculture.io";
const TITLE = "Pullculture — Culture Through Collecting";
const DESCRIPTION =
  "Your daily destination for sports cards, Pokémon, One Piece, TCG investing, grading news, hobby culture, and market insights.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s — Pullculture",
  },
  description: DESCRIPTION,
  applicationName: "Pullculture",
  keywords: [
    "trading cards",
    "sports cards",
    "Pokémon cards",
    "One Piece cards",
    "PSA grading",
    "card market",
    "hobby news",
    "collectibles",
  ],
  authors: [{ name: "Pullculture" }],
  creator: "Pullculture",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Pullculture",
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_US",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Pullculture — Culture Through Collecting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og.png"],
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
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="bg-magma-black text-white antialiased selection:bg-magma-red">
        {children}
      </body>
    </html>
  );
}
