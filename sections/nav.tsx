"use client";

import Link from "next/link";
import React from "react";
import { PaletteIcon } from "@phosphor-icons/react";

export default function Nav() {
  return (
    <nav className="flex justify-center max-w-7xl w-full bg-[#1A1A1A]/5">
      <div className="flex flex-row gap-2 items-center m-4">
        <Link href="#hero" className="text-xl font-semibold tracking-tighter">
          Color Lab
        </Link>
        <PaletteIcon size={24} weight="bold" />
      </div>
    </nav>
  );
}
