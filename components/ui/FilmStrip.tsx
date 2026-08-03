type FilmStripProps = {
  roll?: string;
};

const SPROCKETS = Array.from({ length: 10 }, (_, index) => index);

export function FilmStrip({ roll = "WEDBRIDGE — ROLL 01" }: FilmStripProps) {
  return (
    <aside
      aria-label={roll}
      className="absolute inset-y-0 left-0 flex w-9 flex-col items-center border-r border-[#f5f0e6]/[0.08] bg-[#1d1815] py-7 sm:w-14"
    >
      <div aria-hidden="true" className="flex flex-col items-center">
        {SPROCKETS.slice(0, 5).map((sprocket) => (
          <span className="my-[9px] size-2 rounded-[1px] bg-[#f5f0e6]/[0.14]" key={sprocket} />
        ))}
      </div>
      <span className="my-auto rotate-180 text-[10px] tracking-[0.18em] text-[#c9a227] [writing-mode:vertical-rl]">
        {roll}
      </span>
      <div aria-hidden="true" className="flex flex-col items-center">
        {SPROCKETS.slice(5).map((sprocket) => (
          <span className="my-[9px] size-2 rounded-[1px] bg-[#f5f0e6]/[0.14]" key={sprocket} />
        ))}
      </div>
    </aside>
  );
}
