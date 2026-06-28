"use client";

import { CopyIcon } from "@phosphor-icons/react";

export default function ColorPicker() {
  return (
    <>
      <div className="flex flex-1 relative py-6 pl-6 pr-24 h-[480px] justify-start items-start bg-black border-8 border-[#393939] font-mono w-full rounded-2xl">
        <div className="flex flex-row gap-2 absolute top-6 right-6">
          <button
            type="button"
            aria-label="Copy to clipboard"
            className="flex align-middle bg-[#343434] p-3 rounded-sm hover:bg-[#4A4A4A] transition-colors cursor-pointer"
          >
            <CopyIcon size={20} weight="regular" color="white" />
          </button>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex flex-row gap-1">
            <p className="font-mono text-[#FFA1EE]">theme</p>
            <p className="font-mono text-[#FFEE58] w-full">{"{"}</p>
          </div>

          <div className="flex-col">
            <div className="flex flex-row gap-1 w-full border-l-2 border-[#343434] pl-4">
              <p className="font-mono text-[#9ED8F7]">--color-brand-100</p>
              <p className="font-mono text-[#D4D4D4]">:</p>
              <p className="font-mono text-[#9ED8F7]">#e5ffec</p>
              <p className="font-mono text-[#D4D4D4]">;</p>
            </div>
          </div>

          <div className="flex-col">
            <div className="flex flex-row gap-1 w-full border-l-2 border-[#343434] pl-4">
              <p className="font-mono text-[#9ED8F7]">--color-brand-100</p>
              <p className="font-mono text-[#D4D4D4]">:</p>
              <p className="font-mono text-[#9ED8F7]">#e5ffec</p>
              <p className="font-mono text-[#D4D4D4]">;</p>
            </div>
          </div>

          <div className="flex-col">
            <div className="flex flex-row gap-1 w-full border-l-2 border-[#343434] pl-4">
              <p className="font-mono text-[#9ED8F7]">--color-brand-100</p>
              <p className="font-mono text-[#D4D4D4]">:</p>
              <p className="font-mono text-[#9ED8F7]">#e5ffec</p>
              <p className="font-mono text-[#D4D4D4]">;</p>
            </div>
          </div>

          <div className="flex-col">
            <div className="flex flex-row gap-1 w-full border-l-2 border-[#343434] pl-4">
              <p className="font-mono text-[#9ED8F7]">--color-brand-100</p>
              <p className="font-mono text-[#D4D4D4]">:</p>
              <p className="font-mono text-[#9ED8F7]">#e5ffec</p>
              <p className="font-mono text-[#D4D4D4]">;</p>
            </div>
          </div>

          <div className="flex-col">
            <div className="flex flex-row gap-1 w-full border-l-2 border-[#343434] pl-4">
              <p className="font-mono text-[#9ED8F7]">--color-brand-100</p>
              <p className="font-mono text-[#D4D4D4]">:</p>
              <p className="font-mono text-[#9ED8F7]">#e5ffec</p>
              <p className="font-mono text-[#D4D4D4]">;</p>
            </div>
          </div>

          <div className="flex-col">
            <div className="flex flex-row gap-1 w-full border-l-2 border-[#343434] pl-4">
              <p className="font-mono text-[#9ED8F7]">--color-brand-100</p>
              <p className="font-mono text-[#D4D4D4]">:</p>
              <p className="font-mono text-[#9ED8F7]">#e5ffec</p>
              <p className="font-mono text-[#D4D4D4]">;</p>
            </div>
          </div>

          <div className="flex-col">
            <div className="flex flex-row gap-1 w-full border-l-2 border-[#343434] pl-4">
              <p className="font-mono text-[#9ED8F7]">--color-brand-100</p>
              <p className="font-mono text-[#D4D4D4]">:</p>
              <p className="font-mono text-[#9ED8F7]">#e5ffec</p>
              <p className="font-mono text-[#D4D4D4]">;</p>
            </div>
          </div>

          <div className="flex-col">
            <div className="flex flex-row gap-1 w-full border-l-2 border-[#343434] pl-4">
              <p className="font-mono text-[#9ED8F7]">--color-brand-100</p>
              <p className="font-mono text-[#D4D4D4]">:</p>
              <p className="font-mono text-[#9ED8F7]">#e5ffec</p>
              <p className="font-mono text-[#D4D4D4]">;</p>
            </div>
          </div>

          <div className="flex-col">
            <div className="flex flex-row gap-1 w-full border-l-2 border-[#343434] pl-4">
              <p className="font-mono text-[#9ED8F7]">--color-brand-100</p>
              <p className="font-mono text-[#D4D4D4]">:</p>
              <p className="font-mono text-[#9ED8F7]">#e5ffec</p>
              <p className="font-mono text-[#D4D4D4]">;</p>
            </div>
          </div>

          <p className="font-mono text-[#FFEE58] w-full">{"}"}</p>
        </div>
      </div>
    </>
  );
}
