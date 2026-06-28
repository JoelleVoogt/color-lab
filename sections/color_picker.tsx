"use client";

import { ShuffleIcon, EyedropperIcon } from "@phosphor-icons/react";

export default function ColorPicker() {
  return (
    <>
      <div className="flex flex-1 relative h-[480px] justify-center items-center bg-[#C96442] font-mono w-full rounded-2xl">
        <div className="flex flex-row gap-2 absolute top-6 right-6">
          <div className="flex align-middle bg-white/10 p-3 rounded-sm">
            <ShuffleIcon size={20} weight="regular" color="white" />
          </div>

          <div className="flex align-middle bg-white/10 p-3 rounded-sm">
            <EyedropperIcon size={20} weight="regular" color="white" />
          </div>
        </div>

        <p className="font-mono text-white/40 text-8xl w-full text-center">
          C96442
        </p>
      </div>
    </>
  );
}
