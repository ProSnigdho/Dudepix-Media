import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DudePix Media",
  description: "Transform your content with DudePix Media. Short-form, long-form, and strategy for modern brands.",
  icons: {
    icon: [
      { url: "/favicon.ico" }
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased bg-background text-foreground selection:bg-accent/30 selection:text-white`}
      >
        {children}
      </body>

    </html>
  );
}
