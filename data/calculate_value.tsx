import { oklch } from "culori";

export default function CalculateValue() {
  const base = oklch("#C96442");
  console.log(base);

  return (
    <>
      <div className="flex max-w-7xl justify-content w-full my-24">
        <p className="w-full break-all">{JSON.stringify(base)}</p>
      </div>
    </>
  );
}
