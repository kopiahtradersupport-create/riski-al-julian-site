import { Activity, Cpu, Sparkles } from "lucide-react";
import Reveal from "./Reveal";

const PILLARS = [
  {
    no: "01",
    name: "Market Intelligence",
    headline: "Understanding the Markets.",
    icon: Activity,
    text: "Exploring financial markets through technical analysis, strategic execution, and disciplined risk management.",
    skills: ["Forex Trading", "Gold (XAUUSD)", "Market Analysis", "Technical Strategy", "Risk Management"],
  },
  {
    no: "02",
    name: "Trading Systems",
    headline: "Engineering the Edge.",
    icon: Cpu,
    text: "Designing intelligent trading systems and automation solutions to improve trading workflows through technology.",
    skills: ["MetaTrader 5", "MQL5 Development", "Expert Advisor (EA)", "Custom Indicators", "Trading Automation"],
  },
  {
    no: "03",
    name: "Digital Innovation",
    headline: "Building What's Next.",
    icon: Sparkles,
    text: "Transforming ideas into functional digital products through modern software engineering and creative problem-solving.",
    skills: ["Next.js", "Web Applications", "Android Applications", "Dashboard Development", "Digital Products"],
  },
];

export default function Stack() {
  return (
    <section id="stack" className="section">
      <div className="wrap">
        <Reveal className="mx-auto max-w-3xl text-center">
          <div aria-hidden className="mx-auto mb-7 h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent" />
          <h2 className="font-display text-4xl font-medium uppercase leading-[1.1] tracking-[.14em] md:text-6xl">
            Three Pillars.<span className="block text-gold">One Vision.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {PILLARS.map(({ no, name, headline, icon: Icon, text, skills }, i) => (
            <Reveal key={no} delay={i * 0.12} className="h-full">
              <article className="group relative flex h-full flex-col overflow-hidden rounded-[22px] border border-white/10 bg-gradient-to-b from-[#141923] to-panel p-8 transition duration-500 hover:-translate-y-2 hover:border-gold/60 hover:shadow-[0_0_70px_rgba(198,166,107,.14)]">
                {/* glow */}
                <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(198,166,107,.16),transparent_62%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                {/* garis emas atas */}
                <div aria-hidden className="absolute inset-x-0 top-0 h-px origin-left scale-x-[.25] bg-gradient-to-r from-gold to-transparent transition-transform duration-700 group-hover:scale-x-100" />

                <div className="relative flex items-start justify-between">
                  <span className="font-display text-7xl font-medium leading-none text-gold/30 transition-colors duration-500 group-hover:text-gold">{no}</span>
                  <span className="grid h-12 w-12 place-items-center rounded-full border border-gold/30 bg-ink/60 text-gold transition duration-500 group-hover:border-gold group-hover:shadow-[0_0_24px_rgba(198,166,107,.35)]">
                    <Icon size={22} strokeWidth={1.5} />
                  </span>
                </div>

                <p className="relative mt-8 text-xs font-semibold uppercase tracking-[.28em] text-gold">{name}</p>
                <h3 className="relative mt-3 font-display text-[2rem] font-medium leading-[1.1]">{headline}</h3>
                <p className="relative mt-4 text-[.95rem] text-muted">{text}</p>

                <ul className="relative mt-8 flex-1 border-t border-white/10 pt-2">
                  {skills.map((s) => (
                    <li key={s} className="flex items-center gap-3 border-b border-white/5 py-3 text-[.95rem] last:border-0">
                      <span aria-hidden className="h-1.5 w-1.5 shrink-0 rotate-45 bg-gold/70" />
                      {s}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-16 text-center">
          <div aria-hidden className="mx-auto mb-6 h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent" />
          <p className="font-display text-2xl italic text-gold md:text-4xl">Analyze Markets. Engineer Systems. Build Innovation.</p>
        </Reveal>
      </div>
    </section>
  );
}
