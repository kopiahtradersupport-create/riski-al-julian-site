import Image from "next/image";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="wrap grid items-center gap-14 md:grid-cols-[.85fr_1.15fr]">
        <Reveal>
          {/* Poster ditampilkan utuh (rasio asli), tidak dipotong */}
          <Image src="/images/poster.jpg" alt="Poster profil Riski Al Julian: trader, developer, tech enthusiast" width={1000} height={1069} sizes="(max-width:768px) 100vw, 460px"
            className="h-auto w-full rounded-2xl border border-gold/25 shadow-[0_30px_90px_rgba(198,166,107,.12)]" />
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="h2">Beyond Trading. Beyond Technology.</h2>
          <p className="mt-7 max-w-[600px] text-muted">Saya tidak hanya berfokus pada trading. Pasar keuangan membuat saya tertarik pada disiplin dan pengambilan keputusan, sementara software development membuat saya ingin membangun sendiri alat yang saya butuhkan.</p>
          <p className="mt-4 max-w-[600px] text-muted">Dari sana, minat saya berkembang ke financial markets, automation, software development, dan inovasi digital. Semuanya saya gabungkan dalam satu ekosistem: trading, teknologi, dan komunitas.</p>
          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-gold">
            {["Financial markets", "Automation", "Software development", "Digital innovation"].map((t) => <li key={t} className="border-b border-gold/25">{t}</li>)}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
