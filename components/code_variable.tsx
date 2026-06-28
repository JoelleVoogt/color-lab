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
      <span className="flex flex-row w-full border-l-2 border-[#343434] pl-2 md:pl-6 whitespace-nowrap">
        <span className="font-mono text-[#9ED8F7]">--color</span>
        <span className="font-mono text-[#9ED8F7]">-{name}</span>
        <span className="flex gap-1">
          <span className="font-mono text-[#9ED8F7]">-{scale}</span>
          <span className="font-mono text-[#D4D4D4]">:</span>
          <span className="font-mono text-[#EFA688]">{value}</span>
          <span className="font-mono text-[#D4D4D4]">;</span>
        </span>
      </span>
    </>
  );
}
