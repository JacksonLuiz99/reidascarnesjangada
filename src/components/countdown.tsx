"use client";

import { useSyncExternalStore } from "react";

function subscribe(onChange: () => void) {
  const id = setInterval(onChange, 1000);
  return () => clearInterval(id);
}

const nowInSeconds = () => Math.floor(Date.now() / 1000);

export function Countdown({ target }: { target: string }) {
  // null no servidor: o tempo só é calculado no navegador, sem erro de hidratação.
  const now = useSyncExternalStore(subscribe, nowInSeconds, () => null);
  const targetSeconds = Math.floor(new Date(target).getTime() / 1000);

  if (now === null) {
    return <div className="h-[92px]" aria-hidden />;
  }

  const diff = targetSeconds - now;

  if (diff <= 0) {
    return (
      <p className="font-display text-3xl font-bold uppercase text-brand">
        É hoje! Venha comemorar com a gente!
      </p>
    );
  }

  const parts = [
    { label: "dias", value: Math.floor(diff / 86400) },
    { label: "horas", value: Math.floor((diff % 86400) / 3600) },
    { label: "min", value: Math.floor((diff % 3600) / 60) },
    { label: "seg", value: diff % 60 },
  ];

  return (
    <div className="flex w-full max-w-sm justify-center gap-2 sm:gap-3" role="timer" aria-label="Contagem regressiva para a inauguração">
      {parts.map((part) => (
        <div
          key={part.label}
          className="flex max-w-20 flex-1 flex-col items-center rounded-xl border border-white/10 bg-black/60 py-3"
        >
          <span className="font-display text-3xl font-bold tabular-nums sm:text-4xl">
            {String(part.value).padStart(2, "0")}
          </span>
          <span className="text-xs uppercase tracking-widest text-muted">
            {part.label}
          </span>
        </div>
      ))}
    </div>
  );
}
