"use client";

import { useSyncExternalStore } from "react";

function subscribe(onChange: () => void) {
  const id = setInterval(onChange, 1000);
  return () => clearInterval(id);
}

const nowInSeconds = () => Math.floor(Date.now() / 1000);

type Variant = "hero" | "section";

const styles: Record<Variant, { box: string; number: string; label: string; sep: string }> = {
  // Topo escuro: caixas vermelhas com brilho, números brancos.
  hero: {
    box: "bg-gradient-to-b from-brand to-brand-dark shadow-lg shadow-brand/40 ring-1 ring-white/20",
    number: "text-4xl sm:text-5xl text-white",
    label: "text-white/80",
    sep: "text-brand",
  },
  // Seção vermelha: caixas pretas com borda branca, números enormes.
  section: {
    box: "bg-black shadow-2xl ring-2 ring-white",
    number: "text-4xl sm:text-6xl text-white",
    label: "text-brand",
    sep: "text-black",
  },
};

export function Countdown({ target, variant = "section" }: { target: string; variant?: Variant }) {
  // null no servidor: o tempo só é calculado no navegador, sem erro de hidratação.
  const now = useSyncExternalStore(subscribe, nowInSeconds, () => null);
  const targetSeconds = Math.floor(new Date(target).getTime() / 1000);
  const s = styles[variant];
  const boxHeight = variant === "hero" ? "h-[84px] sm:h-[100px]" : "h-[88px] sm:h-[116px]";

  if (now !== null && targetSeconds - now <= 0) {
    return (
      <p className="font-display text-3xl font-bold uppercase text-white">
        🎉 É hoje! Venha comemorar com a gente!
      </p>
    );
  }

  const diff = now === null ? null : targetSeconds - now;
  const parts = [
    { label: "dias", value: diff === null ? null : Math.floor(diff / 86400) },
    { label: "horas", value: diff === null ? null : Math.floor((diff % 86400) / 3600) },
    { label: "min", value: diff === null ? null : Math.floor((diff % 3600) / 60) },
    { label: "seg", value: diff === null ? null : diff % 60 },
  ];

  return (
    <div
      className="flex w-full max-w-md items-center justify-center gap-1.5 sm:gap-3"
      role="timer"
      aria-label="Contagem regressiva para a inauguração"
    >
      {parts.map((part, i) => (
        <div key={part.label} className="contents">
          {i > 0 && (
            <span className={`font-display text-2xl font-bold ${s.sep}`} aria-hidden>
              :
            </span>
          )}
          <div
            className={`flex min-w-0 max-w-24 flex-1 flex-col items-center justify-center rounded-2xl ${boxHeight} ${s.box}`}
          >
            <span className={`font-display font-bold leading-none tabular-nums ${s.number}`}>
              {part.value === null ? "--" : String(part.value).padStart(2, "0")}
            </span>
            <span className={`mt-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] sm:text-xs ${s.label}`}>
              {part.label}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
