import Image from "next/image";
import Reveal from "./Reveal";
import { SITE, communityHref } from "@/lib/config";

const ext = (u: string) => (u ? { href: u, target: "_blank", rel: "noopener noreferrer" } : { href: "#contact" });

export default function Kopiah() {
  return (
    <section id="kopiah" className="section bg-panel">
      <div className="wrap grid items-center gap-14 md:grid-cols-2">
        <Reveal className="mx-auto w-full max-w-[420px]">
          {/* Logo ditampilkan utuh (rasio asli), tidak dipotong */}
          <Image src="/images/logo-kopiah-trader.jpg" alt="Logo KOPIAH TRADER" width={800} height={800} sizes="(max-width:768px) 90vw, 420px"
            className="h-auto w-full rounded-2xl shadow-[0_0_80px_rgba(198,166,107,.16)]" />
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="h2">More Than a Trading Community.</h2>
          <p className="mb-8 mt-6 max-w-[520px] text-muted">KOPIAH TRADER adalah brand dan komunitas yang saya bangun untuk berbagi pengetahuan, analisis market, dan edukasi, sekaligus membentuk lingkungan trader yang lebih disiplin.</p>
          <div className="flex flex-wrap gap-3.5">
            <a className="btn btn-fill" {...ext(SITE.kopiahUrl)}>Explore KOPIAH TRADER</a>
            <a className="btn btn-ghost" {...ext(communityHref())}>Join The Community</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
