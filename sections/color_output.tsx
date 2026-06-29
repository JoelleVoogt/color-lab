import ColorVariable from "@/components/color_variable";
import { formatHex } from "culori";
import { generateScale } from "@/data/generate_scale";

export default function ColorOutput() {
  const scale = generateScale("#C96442");

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-9 gap-2 max-w-7xl w-full my-8">
        {scale.map((color) => (
          <ColorVariable
            key={color.step}
            scale={String(color.step)}
            value={formatHex(color)}
            text="white"
          />
        ))}
      </div>
    </>
  );
}
