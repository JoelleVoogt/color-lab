"use client";

import { CopyIcon } from "@phosphor-icons/react";
import CodeVariable from "@/components/code_variable";
import { generateScale } from "@/data/generate_scale";
import { formatHex } from "culori";

export default function ColorPicker() {
  const scale = generateScale("#C96442");

  return (
    <>
      <div className="flex flex-1 relative p-6 min-h-[424px] md:min-h-[480px] justify-start items-start bg-gray-950 border-4 md:border-6 border-[#393939] font-mono w-full rounded-2xl">
        <div className="flex flex-row gap-2 absolute top-4 right-4 md:top-6 md:right-6">
          <button
            type="button"
            aria-label="Copy to clipboard"
            className="flex align-middle bg-[#343434] p-3 rounded-sm hover:bg-[#4A4A4A] transition-colors cursor-pointer"
          >
            <CopyIcon size={20} weight="regular" color="white" />
          </button>
        </div>

        <div className="flex flex-col gap-6 pr-0 pt-5 md:pt-0 md:pr-24">
          <div className="flex flex-row gap-2">
            <p className="font-mono text-[#FFA1EE]">theme</p>
            <p className="font-mono text-[#FFEE58] w-full">{"{"}</p>
          </div>

          <div className="flex flex-col gap-1">
            {scale.map((color) => {
              return (
                <CodeVariable
                  key={color.step}
                  name="brand"
                  scale={String(color.step)}
                  value={formatHex(color)}
                />
              );
            })}
          </div>
          <p className="font-mono text-[#FFEE58] w-full">{"}"}</p>
        </div>
      </div>
    </>
  );
}

//     const scale = generateScale("#C96442");

//   {scale.map((color) => {
//   return (
//     [`"--color", "-brand", ${color.step}, ${formatHex(color)}.join("\n");`]
//   );
// }})
