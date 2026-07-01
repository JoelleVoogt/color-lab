"use client";
import { useState, useEffect } from "react";
import { CheckIcon } from "@phosphor-icons/react";

export default function ColorVariable({
  scale,
  value,
  text,
  CopyButton,
}: {
  scale: string;
  value: string;
  text: "white" | "black";
  CopyButton: () => void;
}) {
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
      <button
        type="button"
        onClick={() => {
          CopyButton();
          setCopied(true);
        }}
        style={{ backgroundColor: `${value}`, color: `${text}` }}
        className="p-4 rounded-lg border h-[136px] border-[#262624] cursor-pointer"
      >
        {copied ? (
          <CheckIcon
            size={40}
            weight="regular"
            className="flex w-full justify-center"
            style={{ color: `${text}` }}
          />
        ) : (
          <div className="flex flex-col justify-between h-full text-left">
            <p className="font-semibold">{scale}</p>
            <p>{value}</p>
          </div>
        )}
      </button>
    </>
  );
}
