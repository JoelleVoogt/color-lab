export default function ColorVariable({
  scale,
  value,
  text,
}: {
  scale: string;
  value: string;
  text: "white" | "gray-950";
}) {
  return (
    <>
      <div
        className="flex flex-col gap-12 w-full p-4 rounded-lg border border-[#262624]"
        style={{ backgroundColor: `${value}`, color: `${text}` }}
      >
        <p>{scale}</p>
        <p>{value}</p>
      </div>
    </>
  );
}
