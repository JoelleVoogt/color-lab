export default function Footer() {
  return (
    <div className="w-full bg-[#1A1A1A]/3 dark:bg-[#FAF9F5]/3" id="footer">
      <div className="flex flex-col md:flex-row justify-between max-w-7xl mx-auto p-4 md:py-6 py-12 gap-4">
        {" "}
        <p className="text-sm font-mono">// Gebouwd met VSCode & Next.js</p>
        <p className="text-sm font-mono">&copy; Joelle Voogt 2026</p>
      </div>
    </div>
  );
}
