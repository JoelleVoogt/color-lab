import { oklch } from "culori";

export default function CalculateValue() {
  const base = oklch("#C96442");
  const steps = [100, 200, 300, 400, 500, 600, 700, 800, 900];

  console.log(base);

  return (
    <>
      <div className="flex max-w-7xl justify-content w-full my-24">
        <p className="w-full break-all">{JSON.stringify(base)}</p>
      </div>
    </>
  );
}
