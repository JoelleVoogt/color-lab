"use client";

import Link from "next/link";
import { PaletteIcon } from "@phosphor-icons/react";

export default function Nav() {
  return (
    <nav className="flex justify-center w-full bg-[#1A1A1A]/5">
      <div className="flex flex-row max-w-7xl gap-2 items-center m-4">
        <Link
          href="#hero"
          className="text-2xl font-semibold tracking-tight font-serif"
        >
          Color Lab
        </Link>
        <PaletteIcon size={24} weight="bold" />
      </div>
    </nav>
  );
}
