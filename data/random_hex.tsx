"use client";

import { ShuffleIcon, EyedropperIcon } from "@phosphor-icons/react";
import { wcagContrast } from "culori";

type RandomProps = {
  hex: string;
  onChange: (hex: string) => void;
};

function Random({ hex, onChange }: RandomProps) {
  const contrastWithBlack = wcagContrast(hex, "black");
  const contrastWithWhite = wcagContrast(hex, "white");
  const textColor =
    contrastWithBlack > contrastWithWhite ? "#1a1a1a4d" : "#ffffff4d";
  const iconColor =
    contrastWithBlack > contrastWithWhite ? "#1a1a1a" : "#ffffff";

  function randomColorUtility(length: number) {
    return Math.floor(Math.random() * length);
  }

  function hexy() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    onChange(hexColor);
    console.log("onChange: ", onChange);
  }

  return (
    <div
      className="flex flex-1 relative p-6 min-h-80 md:min-h-120 justify-center items-center font-mono text-6xl md:text-7xl w-full text-center rounded-2xl cursor-pointer"
      style={{ backgroundColor: hex, color: textColor }}
    >
      <div className="flex flex-row gap-2 absolute top-4 right-4 md:top-6 md:right-6">
        {/* De kleuren shuffelaar */}
        <button
          type="button"
          onClick={hexy}
          aria-label="Shuffle color"
          className="flex items-center bg-white/40 p-3 rounded-sm hover:bg-white/60 transition-colors cursor-pointer"
        >
          <ShuffleIcon
            size={20}
            weight="regular"
            style={{
              color: iconColor,
            }}
          />
        </button>

        {/* De functionele color picker */}
        <label
          htmlFor="color-picker"
          className="flex items-center p-3 bg-white/40 rounded-sm hover:bg-white/60 transition-colors cursor-pointer"
        >
          <input
            id="color-picker"
            type="color"
            defaultValue={hex}
            onChange={(e) => onChange(e.target.value)}
            aria-label="Pick color"
            className="sr-only"
          ></input>
          <EyedropperIcon
            size={20}
            weight="regular"
            style={{
              color: iconColor,
            }}
          />
        </label>
      </div>
      {hex}
    </div>
  );
}

export default Random;
