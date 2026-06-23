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

export const metadata: Metadata = {
  title: "Pullculture — Culture Through Collecting",
  description:
    "Your daily destination for sports cards, Pokémon, One Piece, TCG investing, grading news, hobby culture, and market insights.",
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
  openGraph: {
    title: "Pullculture — Culture Through Collecting",
    description:
      "Premium destination for trading card culture, grading news, and market trends.",
    type: "website",
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
