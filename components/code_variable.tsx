export default function CodeVariable({
  name,
  scale,
  value,
}: {
  name: string;
  scale: string;
  value: string;
}) {
  return (
    <>
      <div className="flex flex-row w-full border-l-2 border-[#343434] pl-4">
        <p className="font-mono text-[#9ED8F7]">--color</p>
        <p className="font-mono text-[#9ED8F7]">-{name}</p>
        <div className="flex gap-1">
          <p className="font-mono text-[#9ED8F7]">-{scale}</p>
          <p className="font-mono text-[#D4D4D4]">:</p>
          <p className="font-mono text-[#EFA688]">{value}</p>
          <p className="font-mono text-[#D4D4D4]">;</p>
        </div>
      </div>
    </>
  );
}
