"use client";

import { ShuffleIcon, EyedropperIcon } from "@phosphor-icons/react";

export default function ColorPicker() {
  return (
    <>
      <div className="flex flex-1 relative p-6 min-h-[320px] md:min-h-[480px] justify-center items-center bg-[#C96442] border-8 border-[#C96442] font-mono w-full rounded-2xl">
        <div className="flex flex-row gap-2 absolute top-6 right-6">
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

        <p className="font-mono text-white/40 text-6xl md:text-7xl w-full text-center">
          C96442
        </p>
      </div>
    </>
  );
}
