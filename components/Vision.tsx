import Reveal from "./Reveal";

const FIELDS = ["Trading", "Automation", "Business Technology", "Software Development"];

export default function Vision() {
  return (
    <section id="vision" className="section overflow-hidden text-center md:!py-36">
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(198,166,107,.14),transparent)]" />
      <div className="wrap relative">
        <Reveal>
          <h2 className="h2 mx-auto max-w-[820px]">Different Industries.<span className="block text-gold">One Vision.</span></h2>
        </Reveal>
        <Reveal delay={0.1}>
          <ul className="mx-auto mt-10 flex max-w-[720px] flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs font-semibold uppercase tracking-[.22em] text-muted">
            {FIELDS.map((f, i) => (
              <li key={f} className="flex items-center gap-4">{i > 0 && <span aria-hidden className="h-1 w-1 rotate-45 bg-gold" />}{f}</li>
            ))}
          </ul>
          <p className="mx-auto mt-10 max-w-[680px] font-display text-2xl italic leading-relaxed md:text-3xl">
            Trading, automation, business technology, and software development are different fields, but they share one direction: building solutions, creating opportunities, and turning ideas into reality.
          </p>
          <div aria-hidden className="mx-auto mt-10 h-px w-[70px] bg-gold shadow-[0_0_16px_#C6A66B]" />
        </Reveal>
      </div>
    </section>
  );
}
