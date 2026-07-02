import Random from "@/data/random_hex";

type ColorPickerProps = {
  hex: string;
  onChange: (hex: string) => void;
};

export default function ColorPicker({ hex, onChange }: ColorPickerProps) {
  return (
    <>
      <Random hex={hex} onChange={onChange} />
    </>
  );
}
