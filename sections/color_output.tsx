"use client";

import ColorVariable from "@/components/color_variable";
import { formatHex, wcagContrast } from "culori";
import { generateScale } from "@/data/generate_scale";

export default function ColorOutput() {
  const scale = generateScale("#C96442");

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-9 gap-2 max-w-7xl w-full my-12">
        {scale.map((color) => {
          const contrastWithBlack = wcagContrast(color, "black");
          const contrastWithWhite = wcagContrast(color, "white");
          const textColor =
            contrastWithBlack > contrastWithWhite ? "black" : "white";

          return (
            <ColorVariable
              key={color.step}
              scale={String(color.step)}
              value={formatHex(color)}
              text={textColor}
              CopyButton={() => {
                navigator.clipboard.writeText(formatHex(color));
              }}
            />
          );
        })}
      </div>
    </>
  );
}
