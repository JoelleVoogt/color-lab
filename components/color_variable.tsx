"use client";

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
  return (
    <>
      <button
        type="button"
        onClick={CopyButton}
        className="flex flex-col gap-12 w-full p-4 rounded-lg border border-[#262624] text-left cursor-pointer"
        style={{ backgroundColor: `${value}`, color: `${text}` }}
      >
        <p className="font-semibold">{scale}</p>
        <p>{value}</p>
      </button>
    </>
  );
}
