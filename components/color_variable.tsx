export default function ColorVariable({
  scale,
  value,
  text,
}: {
  scale: string;
  value: string;
  text: "white" | "black";
}) {
  return (
    <>
      <div
        className="flex flex-col gap-12 w-full p-4 rounded-lg border border-[#262624]"
        style={{ backgroundColor: `${value}`, color: `${text}` }}
      >
        <p className="font-semibold">{scale}</p>
        <p>{value}</p>
      </div>
    </>
  );
}
