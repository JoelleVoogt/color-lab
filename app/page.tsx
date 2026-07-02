"use client";

import { useState } from "react";
import "./globals.css";
import Nav from "@/sections/nav";
import Name from "@/sections/name";
import ColorPicker from "@/sections/color_picker";
import CodeOutput from "@/sections/code_output";
import ColorOutput from "@/sections/color_output";
import Footer from "@/sections/footer";

export default function Home() {
  const [hex, setHex] = useState("#C96442");

  return (
    <>
      <div className="flex flex-col flex-1 items-center">
        <Nav />
        <div className="flex flex-col items-center relative content-start w-full px-4 lg:p-0">
          <Name />
          <div className="flex flex-col sm:flex-row max-w-7xl max-h-4/6 gap-8 w-full h-full mt-12">
            <ColorPicker hex={hex} onChange={setHex} />
            <CodeOutput hex={hex} />
          </div>
          <ColorOutput hex={hex} />
        </div>
      </div>
      <Footer />
    </>
  );
}
