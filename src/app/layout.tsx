import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "FIRSTFRAME — AI Creative Studio & Production Lab",
  description:
    "AI-powered UGC ads, product films and social-first creative designed to help brands move fast and scale conversion.",
  openGraph: {
    title: "FIRSTFRAME — AI Creative Studio",
    description:
      "AI-powered UGC ads, product films and social-first creative designed to help brands move fast and scale conversion.",
    url: "https://firstframe.ai",
    siteName: "FIRSTFRAME | AI Creative Studio",
    locale: "en_US",
    type: "website",
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
    <html lang="en" className={`${dmSerif.variable} ${inter.variable}`}>
      <body className="antialiased bg-[#F5F3EE] text-[#111111] min-h-screen selection:bg-[#111111] selection:text-[#F5F3EE]">
        {children}
      </body>
    </html>
  );
}
