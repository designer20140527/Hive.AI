import type { Metadata } from "next";
import { Syne } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
});

const maisonNeue = localFont({
  src: "../../public/fonts/MaisonNeue-ExtendedBook.ttf",
  variable: "--font-maison-neue",
});

export const metadata: Metadata = {
  title: "Hive.AI - Signal In, Smarter AI Out",
  description: "A decentralized AI protocol that transforms content from X and Telegram into powerful general and personal AI models.",
  icons: {
    icon: "/images/logo-transparent.png",
    shortcut: "/images/logo-transparent.png",
    apple: "/images/logo-transparent.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${syne.variable} ${maisonNeue.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
