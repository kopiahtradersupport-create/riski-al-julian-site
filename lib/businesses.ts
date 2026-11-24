import { SITE, waLink, communityHref } from "./config";

export interface Business {
  no: string;
  category: string;
  name: string;
  description: string;
  focus: string[];
  note?: { label: string; text: string };
  image: string; // file lokal di /public
  imageAlt: string;
  fit: "cover" | "contain"; // contain dipakai untuk logo agar tidak terpotong
  cta: { label: string; href: string };
}

export const BUSINESSES: Business[] = [
  {
    no: "01",
    category: "Trading Technology",
    name: "FX Bot Store",
    description: "A trading technology platform focused on Expert Advisors, automated trading solutions, and algorithmic trading tools for MetaTrader users.",
    focus: ["Expert Advisor Marketplace", "MQL5 Development", "MT4 & MT5 Trading Solutions", "Custom Trading Automation"],
    image: "/images/business/fx-bot-store.jpg",
    imageAlt: "Poster FX Bot Store: Automate Your Trading, Maximize Your Potential",
    fit: "cover",
    cta: { label: "Explore FX Bot Store", href: SITE.fxBotStore },
  },
  {
    no: "02",
    category: "Business Technology",
    name: "Smart Business",
    description: "A technology initiative focused on creating practical digital solutions to help businesses and UMKM improve their operations and customer experience.",
    focus: ["Smart Review Solutions", "QR Code & NFC Technology", "Digital Business Tools", "UMKM Technology Solutions"],
    note: { label: "Produk saat ini", text: "SMART REVIEW — QR Code + NFC Card untuk mempermudah pelanggan memberikan ulasan Google." },
    image: "/images/business/smart-business.jpg",
    imageAlt: "Poster Smart Review dari Smart Business: QR Code dan NFC untuk ulasan Google",
    fit: "cover",
    cta: { label: "Explore Smart Business", href: SITE.smartBusiness },
  },
  {
    no: "03",
    category: "Digital Development",
    name: "Website & Application Development",
    description: "Professional digital solutions focused on building modern websites, web applications, Android applications, dashboards, and custom software solutions.",
    focus: ["Professional Website Development", "Web Application Development", "Android Application Development", "Dashboard Development", "Custom Digital Solutions"],
    image: "/images/business/web-app-development.jpg",
    imageAlt: "Poster Website & Application Development: Build Your Digital Future",
    fit: "cover",
    cta: { label: "Explore Services", href: waLink("Halo Riski, saya ingin melihat layanan Website & Application Development.") },
  },
  {
    no: "04",
    category: "Financial Markets",
    name: "Trading & Community",
    description: "Building a trading journey through market analysis, trading discipline, education, and community development.",
    focus: ["Forex Trading", "Gold Trading (XAUUSD)", "Technical Analysis", "Risk Management", "Trading Education", "Trading Community", "Market Discussion"],
    note: { label: "Brand", text: "KOPIAH TRADER" },
    image: "/images/logo-kopiah-trader.jpg",
    imageAlt: "Logo KOPIAH TRADER",
    fit: "contain",
    cta: { label: "Join the Community", href: communityHref() },
  },
];
