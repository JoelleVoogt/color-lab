"use client";

import { useState } from "react";
import "./globals.css";
import Nav from "@/sections/nav";
import Name from "@/sections/name";
import ColorPicker from "@/sections/color_picker";
import CodeOutput from "@/sections/code_output";
import ColorOutput from "@/sections/color_output";
import Footer from "@/sections/footer";
import Showcase from "@/components/showcase";

export default function Home() {
  const [hex, setHex] = useState("#C96442");
  const [name, setName] = useState("brand");

  return (
    <>
      <div className="flex flex-col flex-1 items-center">
        <Nav />
        <div className="flex flex-col items-center relative content-start w-full px-4 lg:p-0">
          <Name onChange={setName} />
          <div className="flex flex-col sm:flex-row max-w-7xl max-h-4/6 gap-6 w-full h-full mt-12">
            <ColorPicker hex={hex} onChange={setHex} />
            <CodeOutput hex={hex} name={name} />
          </div>
          <ColorOutput hex={hex} />

          {/* Uncomment Showcase en onthul de theme */}
          {/* <Showcase /> */}
          {/* Uncomment Showcase en onthul de theme */}
        </div>
      </div>
      <Footer />
    </>
  );
}
