function CardButtons({
  tertiaryBg,
  tertiaryText,
  tertiaryBorder,
}: {
  tertiaryBg: string;
  tertiaryText: string;
  tertiaryBorder: string;
}) {
  return (
    <div className="flex flex-row gap-3 mt-6">
      <button
        type="button"
        className="px-6 py-3 rounded-lg font-semibold text-white bg-brand-500 hover:bg-brand-600 transition-colors cursor-pointer"
      >
        Default
      </button>
      <button
        type="button"
        className="px-6 py-3 rounded-lg font-semibold text-white bg-brand-600 cursor-pointer"
      >
        Hover
      </button>
      <button
        type="button"
        className={`px-6 py-3 rounded-lg font-semibold border-2 ${tertiaryBorder} ${tertiaryText} cursor-pointer transition-colors ${tertiaryBg}`}
      >
        Tertiary
      </button>
    </div>
  );
}

export default function Showcase() {
  return (
    <div className="flex flex-col sm:flex-row max-w-7xl w-full gap-6 m-12">
      <div className="flex flex-col flex-1 p-8 rounded-2xl border border-black bg-brand-100">
        <h3 className="text-xl font-semibold text-black">Light showcase</h3>
        <p className="mt-3 text-black/80">
          The quick brown fox jumps over the lazy dog. Sphinx of black quartz,
          judge my vow. How quickly daft jumping zebras vex! The five boxing
          wizards.
        </p>
        <CardButtons
          tertiaryBg="bg-brand-100"
          tertiaryText="text-brand-600"
          tertiaryBorder="border-brand-500"
        />
      </div>

      <div className="flex flex-col flex-1 p-8 rounded-2xl bg-brand-800">
        <h3 className="text-xl font-semibold text-white">Dark showcase</h3>
        <p className="mt-3 text-white/80">
          The quick brown fox jumps over the lazy dog. Sphinx of black quartz,
          judge my vow. How quickly daft jumping zebras vex! The five boxing
          wizards.
        </p>
        <CardButtons
          tertiaryBg="bg-brand-800"
          tertiaryText="text-brand-300"
          tertiaryBorder="border-brand-300"
        />
      </div>
    </div>
  );
}
