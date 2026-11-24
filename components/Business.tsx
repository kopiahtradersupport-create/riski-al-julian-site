import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { BUSINESSES, type Business } from "@/lib/businesses";

function Visual({ b }: { b: Business }) {
  return (
    <div className={`relative aspect-[14/15] overflow-hidden border-b border-white/10 ${b.fit === "contain" ? "bg-[#E9E5DF]" : "bg-ink"}`}>
      <Image
        src={b.image}
        alt={b.imageAlt}
        fill
        quality={90}
        sizes="(max-width:1024px) 100vw, 560px"
        className={`transition duration-700 group-hover:scale-[1.03] ${b.fit === "contain" ? "object-contain" : "object-cover object-top"}`}
      />
    </div>
  );
}

export default function BusinessSection() {
  return (
    <section id="business" className="section">
      <div className="wrap">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[.3em] text-gold">My Business Ecosystem</p>
          <h2 className="h2">More Than Skills. Real Businesses.</h2>
          <p className="mt-6 text-muted">From financial markets to digital products, I build and develop businesses by combining trading knowledge, technology, and innovation.</p>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {BUSINESSES.map((b, i) => {
            const external = b.cta.href.startsWith("http");
            return (
              <Reveal key={b.no} delay={(i % 2) * 0.1} className="h-full">
                <article className="group relative flex h-full flex-col overflow-hidden rounded-[22px] border border-white/10 bg-gradient-to-b from-[#141923] to-panel transition duration-500 hover:-translate-y-1.5 hover:border-gold/60 hover:shadow-[0_0_70px_rgba(198,166,107,.14)]">
                  <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 z-20 h-px origin-left scale-x-[.25] bg-gradient-to-r from-gold to-transparent transition-transform duration-700 group-hover:scale-x-100" />
                  <Visual b={b} />
                  <div className="flex flex-1 flex-col p-7 md:p-8">
                    <div className="flex items-baseline gap-4">
                      <span className="font-display text-5xl leading-none text-gold/30 transition-colors duration-500 group-hover:text-gold">{b.no}</span>
                      <p className="text-xs font-semibold uppercase tracking-[.26em] text-gold">{b.category}</p>
                    </div>
                    <h3 className="mt-4 font-display text-4xl font-medium leading-tight">{b.name}</h3>
                    <p className="mt-3 text-[.95rem] text-muted">{b.description}</p>

                    {b.note && (
                      <p className="mt-5 rounded-xl border border-gold/20 bg-gold/[.06] px-4 py-3 text-sm">
                        <span className="mr-2 text-xs font-semibold uppercase tracking-[.2em] text-gold">{b.note.label}</span>{b.note.text}
                      </p>
                    )}

                    <ul className="mt-6 grid flex-1 content-start gap-x-6 border-t border-white/10 pt-3 sm:grid-cols-2">
                      {b.focus.map((f) => (
                        <li key={f} className="flex items-center gap-3 py-2 text-sm">
                          <span aria-hidden className="h-1.5 w-1.5 shrink-0 rotate-45 bg-gold/70" />{f}
                        </li>
                      ))}
                    </ul>

                    <a href={b.cta.href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="btn btn-fill mt-7 self-start uppercase tracking-wider">
                      {b.cta.label}<ArrowUpRight size={16} />
                    </a>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
