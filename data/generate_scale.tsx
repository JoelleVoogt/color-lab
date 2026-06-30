import { oklch } from "culori";

export function generateScale(hex: string) {
  const base = oklch(hex);
  if (base === undefined) {
    return [];
  }

  const steps = [
    { step: 100, l: 0.97, cMultiplier: 0.12 },
    { step: 200, l: 0.882, cMultiplier: 0.34 },
    { step: 300, l: 0.794, cMultiplier: 0.48 },
    { step: 400, l: 0.705, cMultiplier: 0.84 },
    { step: 500, l: 0.617, cMultiplier: 1.0 },
    { step: 600, l: 0.5, cMultiplier: 0.84 },
    { step: 700, l: 0.384, cMultiplier: 0.48 },
    { step: 800, l: 0.267, cMultiplier: 0.34 },
    { step: 900, l: 0.15, cMultiplier: 0.12 },
  ];

  return steps.map(({ step, l, cMultiplier }) => ({
    step,
    mode: "oklch" as const,
    l,
    c: base.c * cMultiplier,
    h: base.h,
  }));
}
