import { oklch } from "culori";

export function generateScale(hex: string) {
  const base = oklch(hex);
  if (base === undefined) {
    return [];
  }

  return [
    { step: 100, mode: "oklch" as const, l: 0.97, c: 0, h: base.h },
    { step: 200, mode: "oklch" as const, l: 0.882, c: 0.05, h: base.h },
    { step: 300, mode: "oklch" as const, l: 0.794, c: 0.12, h: base.h },
    { step: 400, mode: "oklch" as const, l: 0.705, c: 0.21, h: base.h },
    { step: 500, mode: "oklch" as const, l: 0.617, c: 0.25, h: base.h },
    { step: 600, mode: "oklch" as const, l: 0.5, c: 0.21, h: base.h },
    { step: 700, mode: "oklch" as const, l: 0.384, c: 0.12, h: base.h },
    { step: 800, mode: "oklch" as const, l: 0.267, c: 0.05, h: base.h },
    { step: 900, mode: "oklch" as const, l: 0.15, c: 0, h: base.h },
  ];
}

// const light = base.l;
// const chroma = base.c;

// function chromaAdjust(){
//   base.c * curve
// }

// function lightnessAdjust(){
//   base.l
// }
