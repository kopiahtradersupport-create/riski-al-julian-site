import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({ subsets: ["latin"], weight: ["500", "600"], style: ["normal", "italic"], variable: "--font-display" });
const sans = Manrope({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Riski Al Julian — Trader, Technology Builder & Entrepreneur",
  description: "Riski Al Julian: trader, technology builder, dan entrepreneur. FX Bot Store, Smart Business, Digital Development, dan KOPIAH TRADER.",
  openGraph: { title: "Riski Al Julian — Trading the Markets. Building the Future.", images: ["/images/hero.jpg"], type: "website" },
};
export const viewport: Viewport = { themeColor: "#080A0F", viewportFit: "cover" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${display.variable} ${sans.variable}`}>
      <body className="font-sans leading-relaxed antialiased">{children}</body>
    </html>
  );
}
