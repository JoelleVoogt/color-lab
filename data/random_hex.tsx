"use client";

import { useState } from "react";

function Random() {
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
      className="flex justify-evenly items-center mt-4 px-[30px] text-white"
      style={{ background: color, width: "50vw", height: "50vh" }}
    >
      <button onClick={hexy}>{color}</button>
    </div>
  );
}

export default Random;
