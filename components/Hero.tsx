import Image from "next/image";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="hero" className="section flex min-h-[calc(100vh-68px)] items-center !py-14">
      <div className="wrap grid items-center gap-12 md:grid-cols-[1.15fr_.85fr]">
        <div className="order-2 md:order-1">
          <Reveal>
            <h1 className="font-display text-5xl font-medium leading-[1.02] tracking-tight sm:text-7xl lg:text-[6.2rem]">
              Trading the markets.<em className="block text-gold">Building the future.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.15}><p className="my-7 max-w-[520px] text-muted">Saya Riski Al Julian. Trader, technology builder, dan entrepreneur yang membangun bisnis dengan menggabungkan market knowledge, teknologi, dan inovasi.</p></Reveal>
          <Reveal delay={0.2}><p className="mb-6 max-w-[520px] font-display text-xl italic text-gold md:text-2xl">Building Businesses. Engineering Technology. Exploring Markets.</p></Reveal>
          <Reveal delay={0.25}>
            <ul className="mb-9 flex flex-wrap gap-2.5 text-xs">
              {["Trader", "Technology Builder", "Entrepreneur"].map((t) => <li key={t} className="rounded-full border border-gold/25 bg-panel/60 px-4 py-1.5">{t}</li>)}
            </ul>
          </Reveal>
          <Reveal delay={0.35}>
            <div className="flex flex-wrap gap-3.5">
              <a href="#about" className="btn btn-fill">Explore My Journey</a>
              <a href="#contact" className="btn btn-ghost">Let&apos;s Work Together</a>
            </div>
          </Reveal>
        </div>
        <Reveal className="order-1 mx-auto w-[min(78%,420px)] md:order-2 md:w-full">
          <div className="relative">
            <div aria-hidden className="absolute -inset-3.5 left-3.5 top-3.5 rounded-t-[200px] rounded-b-2xl border border-gold/25" />
            <Image src="/images/hero.jpg" alt="Riski Al Julian mengenakan setelan hitam" width={900} height={1200} priority sizes="(max-width:768px) 78vw, 420px"
              className="relative aspect-[3/4] w-full rounded-t-[200px] rounded-b-2xl object-cover object-top shadow-[0_30px_90px_rgba(198,166,107,.14)]" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
