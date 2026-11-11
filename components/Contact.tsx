import { MessageCircle, Instagram, Music2 } from "lucide-react";
import Reveal from "./Reveal";
import { SITE, waLink } from "@/lib/config";

const OPEN = ["Business Collaboration", "Technology Partnerships", "Custom EA Development", "Website & App Projects", "Digital Product Development", "Trading Community Collaboration"];

export default function Contact() {
  const links = [
    { label: "WhatsApp", href: waLink(), icon: MessageCircle, fill: true },
    { label: `Instagram ${SITE.instagramHandle}`, href: SITE.instagram, icon: Instagram, fill: false },
    { label: `TikTok ${SITE.tiktokHandle}`, href: SITE.tiktok, icon: Music2, fill: false },
  ];
  return (
    <section id="contact" className="section">
      <div className="wrap">
        <Reveal>
          <h2 className="h2">Have an Idea? Let&apos;s Build It.</h2>
          <ul className="my-8 max-w-[640px] gap-x-10 sm:columns-2">
            {OPEN.map((o) => <li key={o} className="break-inside-avoid border-b border-white/10 py-2.5 text-[.95rem]">{o}</li>)}
          </ul>
          <div className="flex flex-wrap gap-3.5">
            {links.map(({ label, href, icon: Icon, fill }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className={`btn ${fill ? "btn-fill" : "btn-ghost"}`}><Icon size={18} />{label}</a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
