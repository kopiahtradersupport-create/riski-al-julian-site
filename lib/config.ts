/** Satu tempat untuk mengubah kontak & link. */
export const SITE = {
  name: "Riski Al Julian",
  whatsapp: "628818202500", // 08818202500 format internasional
  instagram: "https://instagram.com/riskialjulian_24",
  instagramHandle: "@riskialjulian_24",
  tiktok: "https://www.tiktok.com/@kopiahtrader",
  tiktokHandle: "@kopiahtrader",
  kopiahUrl: "https://www.tiktok.com/@kopiahtrader", // ganti ke website/channel resmi jika ada
  communityUrl: "https://chat.whatsapp.com/BBI7YvpmfLfJKidwIpluDi", // isi link grup komunitas (WhatsApp/Telegram/Discord). Kosong = diarahkan ke chat WhatsApp
  fxBotStore: "https://fxbot-store.web.app/",
  smartBusiness: "https://smartbusiness-id.netlify.app/",
} as const;

export const waLink = (text = "Halo Riski, saya ingin berdiskusi.") =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;

export const communityHref = () =>
  SITE.communityUrl || waLink("Halo Riski, saya ingin bergabung dengan komunitas KOPIAH TRADER.");
