"use client";
import { useEffect, useRef } from "react";

/** Garis chart emas yang bergerak pelan. Dimatikan jika reduced-motion. */
export default function BackgroundCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = ref.current;
    if (!c || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const x = c.getContext("2d");
    if (!x) return;
    let w = 0, h = 0, t = 0, raf = 0;
    const resize = () => { w = c.width = innerWidth; h = c.height = innerHeight; };
    resize();
    addEventListener("resize", resize);
    const draw = () => {
      x.clearRect(0, 0, w, h);
      x.strokeStyle = "rgba(198,166,107,.09)";
      for (let k = 0; k < 3; k++) {
        x.beginPath();
        for (let i = 0; i <= w; i += 8) {
          const y = h * (0.3 + k * 0.22) + Math.sin(i / 140 + t + k * 2) * 38 + Math.sin(i / 47 + t * 1.7) * 12;
          if (i) x.lineTo(i, y); else x.moveTo(i, y);
        }
        x.stroke();
      }
      t += 0.004;
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={ref} aria-hidden className="pointer-events-none fixed inset-0 -z-10 opacity-50" />;
}
