import "./globals.css";
import Nav from "@/sections/nav";
import Name from "@/sections/name";
import ColorPicker from "@/sections/color_picker";
import CodeOutput from "@/sections/code_output";
import ColorOutput from "@/sections/color_output";
import Footer from "@/sections/footer";
import CalculateValue from "@/sections/color_output";

export default function Home() {
  return (
    <>
      <div className="flex flex-col flex-1 items-center">
        <Nav />
        <div className="flex flex-col items-center relative content-start w-full px-4 lg:p-0">
          <Name />
          <div className="flex flex-col sm:flex-row max-w-7xl max-h-4/6 gap-10 w-full h-full mt-12">
            <ColorPicker />
            <CodeOutput />
          </div>
          <ColorOutput />
        </div>
      </div>
      <Footer />
    </>
  );
}
