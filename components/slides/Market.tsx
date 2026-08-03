import { ArrowRight } from "lucide-react";

import { FilmStrip } from "@/components/ui/FilmStrip";
import { FlowCard } from "@/components/ui/FlowCard";
import { FrameHeader } from "@/components/ui/FrameHeader";

const MARKET_SEGMENTS = [
  { acronym: "TAM", caption: "All wedding professionals across India", rotation: "-rotate-2" },
  { acronym: "SAM", caption: "Professionals adopting digital workflow software", rotation: "rotate-[1.5deg]" },
  { acronym: "SOM", caption: "Kerala first — then South India, then Pan-India", rotation: "-rotate-1" },
];

export function Market() {
  return (
    <section aria-labelledby="market-title" className="relative min-h-screen bg-[#14110f]" data-frame="4">
      <FilmStrip />
      <div className="relative ml-9 flex min-h-screen flex-col justify-center px-6 py-10 sm:ml-14 sm:px-16 sm:py-[60px] sm:pb-[70px]">
        <FrameHeader frame="FRAME 04" title="Market" />
        <h2 id="market-title" className="mb-[18px] max-w-[760px] font-display text-[clamp(2rem,4.4vw,3.6rem)] font-semibold leading-[1.05] tracking-[-0.015em] text-[#f5f0e6]">
          Every wedding creates a <em className="font-medium text-[#c9a227]">new</em> project.
        </h2>
        <p className="mb-11 max-w-[500px] text-sm leading-[1.7] text-[#b8ac98]">
          Each of these spins up a temporary team of photographers, videographers, editors and planners — still managed manually, and repeated every time.
        </p>
        <div className="mb-[52px] flex flex-wrap items-center gap-3.5">
          <div className="flex items-center gap-3.5">
            <div className="flex size-[88px] shrink-0 rotate-[-4deg] flex-col items-center justify-center rounded-full border-[2.5px] border-[#c9a227]">
              <span className="font-display text-xl font-semibold leading-none text-[#c9a227]">10M+</span>
              <span className="mt-0.5 text-[7px] uppercase tracking-[0.1em] text-[#c9a227]">select</span>
            </div>
            <p className="max-w-[120px] text-[11px] leading-[1.5] text-[#b8ac98]">Weddings every year, <strong className="font-medium text-[#c9a227]">India</strong></p>
          </div>
          <ArrowRight aria-hidden="true" className="size-[15px] text-[#8b806e]" strokeWidth={1.5} />
          <FlowCard value="Millions" label={<>Collaborative<br />projects</>} />
          <ArrowRight aria-hidden="true" className="size-[15px] text-[#8b806e]" strokeWidth={1.5} />
          <FlowCard value="Manual" label="Coordination" />
          <ArrowRight aria-hidden="true" className="size-[15px] text-[#8b806e]" strokeWidth={1.5} />
          <FlowCard value="WedBridge" label="Platform" highlighted />
        </div>
        <div className="mb-10 flex flex-wrap gap-[22px]">
          {MARKET_SEGMENTS.map((segment) => (
            <article className={`w-[150px] bg-[#f3ede1] px-3 pt-3 pb-[30px] shadow-[0_6px_14px_rgba(0,0,0,0.35)] ${segment.rotation}`} key={segment.acronym}>
              <div className="flex h-[78px] items-center justify-center bg-[#6e2a2a]">
                <span className="font-display text-[22px] font-bold text-[#f3ede1]">{segment.acronym}</span>
              </div>
              <p className="mt-2.5 text-center text-[10px] leading-[1.4] text-[#3a342a]">{segment.caption}</p>
            </article>
          ))}
        </div>
        <p className="max-w-[600px] font-display text-[clamp(1.15rem,2.1vw,1.6rem)] font-medium italic leading-[1.4] text-[#c9a227]">
          Every wedding is another opportunity for recurring revenue.
        </p>
        <p className="mt-6 text-[9px] leading-[1.5] text-[#8b806e] sm:absolute sm:right-16 sm:bottom-[22px] sm:mt-0 sm:text-right">
          Sources<br />IBEF (India Brand Equity Foundation)<br />WedMeGood Wedding Industry Report
        </p>
      </div>
    </section>
  );
}
