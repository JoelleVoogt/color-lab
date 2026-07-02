"use client";

import { useState, useEffect } from "react";
import { CopyIcon, CheckIcon } from "@phosphor-icons/react";
import CodeVariable from "@/components/code_variable";
import { generateScale } from "@/data/generate_scale";
import { formatHex } from "culori";
import CopyButton from "@/data/copy_clipboard";

type CodeOutputProps = {
  hex: string;
};

export default function ColorPicker({ hex }: CodeOutputProps) {
  const scale = generateScale(hex);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied === true) {
      setTimeout(() => {
        setCopied(false);
      }, 350);
    }
  }, [copied]);

  return (
    <>
      <div className="flex flex-1 relative p-6 min-h-[424px] md:min-h-[480px] justify-start items-start bg-gray-950 border-4 md:border-6 border-[#393939] font-mono w-full rounded-2xl">
        <div className="flex flex-row gap-2 absolute top-4 right-4 md:top-6 md:right-6">
          <button
            type="button"
            onClick={() => {
              CopyButton({
                text: `--color-brand-${scale[0].step} : ${formatHex(scale[0])} ; 
--color-brand-${scale[1].step} : ${formatHex(scale[1])} ;
--color-brand-${scale[2].step} : ${formatHex(scale[2])} ;
--color-brand-${scale[3].step} : ${formatHex(scale[3])} ;
--color-brand-${scale[4].step} : ${formatHex(scale[4])} ;
--color-brand-${scale[5].step} : ${formatHex(scale[5])} ;
--color-brand-${scale[6].step} : ${formatHex(scale[6])} ;
--color-brand-${scale[7].step} : ${formatHex(scale[7])} ;
--color-brand-${scale[8].step} : ${formatHex(scale[8])} ;`,
              });
              setCopied(true);
            }}
            aria-label="Copy to clipboard"
            className="flex align-middle bg-[#343434] p-3 rounded-sm hover:bg-[#4A4A4A] transition-colors cursor-pointer"
          >
            {copied ? (
              <CheckIcon size={20} weight="regular" color="white" />
            ) : (
              <CopyIcon size={20} weight="regular" color="white" />
            )}
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
                  color="--color"
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
