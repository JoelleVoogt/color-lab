import ColorVariable from "@/components/color_variable";

export default function ColorOutput() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-9 gap-2 max-w-7xl w-full my-8">
      <ColorVariable scale="100" value="#F6DDD5" text="gray-950" />
      <ColorVariable scale="200" value="#ECBCAC" text="gray-950" />
      <ColorVariable scale="300" value="#E39A82" text="gray-950" />
      <ColorVariable scale="400" value="#D97757" text="gray-950" />
      <ColorVariable scale="500" value="#C96442" text="gray-950" />
      <ColorVariable scale="600" value="#A64626" text="white" />
      <ColorVariable scale="700" value="#7D341C" text="white" />
      <ColorVariable scale="800" value="#532313" text="white" />
      <ColorVariable scale="900" value="#2A1109" text="white" />
    </div>
  );
}
