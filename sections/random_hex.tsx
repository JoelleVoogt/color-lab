"use client";

import { useState } from "react";
import { ShuffleIcon, EyedropperIcon } from "@phosphor-icons/react";
import { wcagContrast } from "culori";

function ColorPicker() {
  const [color, setColor] = useState("#C96442");

  function randomColorUtility(length: number) {
    return Math.floor(Math.random() * length);
  }

  function hexy() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    console.log("Generated hex color:", hexColor);
    setColor(hexColor);
  }

  return (
    <div
      role="button"
      onClick={hexy}
      className="flex flex-1 relative p-6 min-h-[320px] md:min-h-[480px] justify-center items-center font-mono text-white/40 text-6xl md:text-7xl w-full text-center font-mono w-full rounded-2xl cursor-pointer"
      style={{ backgroundColor: color }}
    >
      <div className="flex flex-row gap-2 absolute top-4 right-4 md:top-6 md:right-6">
        <button
          type="button"
          aria-label="Shuffle color"
          className="flex align-middle bg-white/10 p-3 rounded-sm hover:bg-white/20 transition-colors cursor-pointer"
        >
          <ShuffleIcon size={20} weight="regular" color="white" />
        </button>
        <button
          type="button"
          aria-label="Pick color"
          className="flex align-middle bg-white/10 p-3 rounded-sm hover:bg-white/20 transition-colors cursor-pointer"
        >
          <EyedropperIcon size={20} weight="regular" color="white" />
        </button>
      </div>
      {color}
    </div>
  );
}

export default ColorPicker;
