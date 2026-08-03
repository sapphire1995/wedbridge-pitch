import { CalendarDays, ListChecks, Search } from "lucide-react";

import { ExposureCard } from "@/components/ui/ExposureCard";
import { FilmStrip } from "@/components/ui/FilmStrip";
import { FrameHeader } from "@/components/ui/FrameHeader";

const FEATURES = [
  { number: "01", title: "Discover", description: "Find trusted professionals by role, location, availability and portfolio.", icon: Search },
  { number: "02", title: "Collaborate", description: "Invite team members, chat inside the project, assign work and coordinate every stage together.", icon: ListChecks },
  { number: "03", title: "Manage", description: "Projects, schedules, invitations and team availability stay automatically synchronized.", icon: CalendarDays },
];

function PerforationColumn() {
  return (
    <div aria-hidden="true" className="hidden flex-col justify-evenly px-[5px] md:flex">
      {Array.from({ length: 5 }, (_, index) => <span className="size-1.5 border border-[#f5f0e6]/[0.18] bg-[#14110f]" key={index} />)}
    </div>
  );
}

export function Product() {
  return (
    <section aria-labelledby="product-title" className="relative min-h-screen bg-[#14110f]" data-frame="3">
      <FilmStrip />
      <div className="ml-9 flex min-h-screen flex-col justify-center px-6 py-10 sm:ml-14 sm:px-16 sm:py-[60px]">
        <FrameHeader frame="FRAME 03" title="The Product" />
        <h2 id="product-title" className="mb-[18px] max-w-[760px] font-display text-[clamp(2rem,4.4vw,3.6rem)] font-semibold leading-[1.05] tracking-[-0.015em] text-[#f5f0e6]">
          One platform. <em className="font-medium text-[#c9a227]">Purpose-built</em> for weddings.
        </h2>
        <p className="mb-[52px] max-w-[480px] text-sm leading-[1.7] text-[#b8ac98]">
          Generic tools weren&apos;t built for wedding work. WedBridge brings discovery, collaboration and project management into one connected workspace.
        </p>
        <div className="mb-12 flex max-w-[920px] flex-col md:flex-row">
          {FEATURES.map((feature, index) => (
            <div className="contents" key={feature.number}>
              <ExposureCard {...feature} />
              {index < FEATURES.length - 1 && <PerforationColumn />}
            </div>
          ))}
        </div>
        <p className="max-w-[600px] font-display text-[clamp(1.15rem,2.1vw,1.6rem)] font-medium italic leading-[1.4] text-[#c9a227]">
          Not another marketplace. Not another messaging app.
          <span className="mt-2 block font-mono text-xs not-italic tracking-[0.05em] text-[#b8ac98]">Purpose-built for the wedding industry.</span>
        </p>
      </div>
    </section>
  );
}
