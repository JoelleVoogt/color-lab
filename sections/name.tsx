export default function Name() {
  return (
    <>
      <div className="flex justify-center max-w-7xl w-full mt-12">
        <input
          type="text"
          placeholder="Name your color..."
          className="flex justify-start w-full py-4 px-6 text-[#1A1A1A] dark:text-white placeholder:text-black/40 dark:placeholder:text-white/40 bg-[#1A1A1A]/3 dark:bg-[#FAF9F5]/5 rounded-full border border-[#ceccc2] dark:border-[#e4e0d0]/14 outline-none transition-shadow focus:border-[#C96442] focus:ring-2 focus:ring-[#C96442]"
        />
      </div>
    </>
  );
}
