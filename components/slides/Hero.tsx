import { FilmStrip } from "@/components/ui/FilmStrip";
import { FrameHeader } from "@/components/ui/FrameHeader";
import { Stamp } from "@/components/ui/Stamp";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative min-h-screen bg-[#14110f]" data-frame="1">
      <FilmStrip />
      <div className="ml-9 flex min-h-screen flex-col justify-center px-6 py-10 sm:ml-14 sm:px-16 sm:py-[60px]">
        <FrameHeader frame="FRAME 01" title="Hero" className="mb-11" />
        <h1 id="hero-title" className="mb-7 max-w-[900px] font-display text-[clamp(2.6rem,6vw,5.4rem)] font-semibold leading-[0.98] tracking-[-0.02em] text-[#f5f0e6]">
          Millions of wedding professionals.<br />One <em className="font-medium text-[#c9a227]">disconnected</em> workflow.
        </h1>
        <div aria-hidden="true" className="my-2 flex max-w-[500px] items-center gap-1.5">
          {[0, 1, 2].map((hole) => (
            <span className="contents" key={hole}>
              <span className="size-1.5 shrink-0 border border-[#f5f0e6]/20" />
              {hole < 2 && <span className="h-px flex-1 bg-[#f5f0e6]/[0.14]" />}
            </span>
          ))}
        </div>
        <p className="mb-12 max-w-[460px] text-[15px] leading-[1.7] text-[#b8ac98]">
          Meet WedBridge — the work management platform for the wedding industry.
        </p>
        <Stamp>Shot on experience, not assumption</Stamp>
      </div>
    </section>
  );
}
