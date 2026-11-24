"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [["About", "#about"], ["Business", "#business"], ["Kopiah Trader", "#kopiah"], ["Expertise", "#stack"], ["Contact", "#contact"]];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav aria-label="Navigasi utama" className="sticky top-0 z-50 border-b border-white/5 bg-ink/75 backdrop-blur-xl">
      <div className="wrap flex h-[68px] items-center justify-between">
        <a href="#hero" className="font-display text-xl font-semibold tracking-[.14em]">RISKI <span className="text-gold">AL JULIAN</span></a>
        <div className="hidden gap-8 text-sm text-muted md:flex">
          {LINKS.map(([l, h]) => <a key={h} href={h} className="transition-colors hover:text-gold">{l}</a>)}
        </div>
        <button className="grid h-11 w-11 place-items-center rounded-xl border border-gold/30 md:hidden" aria-label={open ? "Tutup menu" : "Buka menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <div className="border-t border-gold/20 bg-ink/95 px-6 pb-4 md:hidden">
          {LINKS.map(([l, h]) => <a key={h} href={h} onClick={() => setOpen(false)} className="block border-b border-white/5 py-4 text-muted">{l}</a>)}
        </div>
      )}
    </nav>
  );
}
