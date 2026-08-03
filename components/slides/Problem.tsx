import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

import { FilmStrip } from "@/components/ui/FilmStrip";
import { FrameHeader } from "@/components/ui/FrameHeader";

type WorkflowStep = {
  label: ReactNode;
  number: string;
  tone?: "complete" | "wedding";
};

const WORKFLOW: WorkflowStep[] = [
  { number: "01", label: <>Client books<br />wedding</>, tone: "complete" },
  { number: "02", label: <>Find<br />photographer</> },
  { number: "03", label: <>Find<br />videographer</> },
  { number: "04", label: <>Find drone<br />operator</> },
  { number: "05", label: <>Wedding<br />day</>, tone: "wedding" },
  { number: "06", label: <>Post<br />production</> },
  { number: "07", label: "Repeat" },
];

export function Problem() {
  return (
    <section aria-labelledby="problem-title" className="relative min-h-screen bg-[#14110f]" data-frame="2">
      <FilmStrip />
      <div className="ml-9 flex min-h-screen flex-col justify-center px-6 py-10 sm:ml-14 sm:px-16 sm:py-[60px]">
        <FrameHeader frame="FRAME 02" title="The Problem" />
        <h2 id="problem-title" className="mb-[18px] max-w-[760px] font-display text-[clamp(2rem,4.4vw,3.6rem)] font-semibold leading-[1.05] tracking-[-0.015em] text-[#f5f0e6]">
          Every booked wedding starts a <em className="font-medium text-[#c9a227]">race</em> to assemble the right team.
        </h2>
        <p className="mb-[52px] max-w-[480px] text-sm leading-[1.7] text-[#b8ac98]">
          After a wedding is booked, studios rush to find available professionals, confirm schedules, and coordinate everyone — then repeat the same process again for post-production.
        </p>
        <div aria-label="The current wedding coordination workflow" className="mb-11 overflow-x-auto py-3.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c9a227]" tabIndex={0}>
          <ol className="flex min-w-max items-center">
            {WORKFLOW.map((step, index) => (
              <li className="contents" key={step.number}>
                <article className={`flex h-[104px] w-[132px] flex-col justify-between border bg-[#1d1815] p-2.5 ${step.tone === "complete" ? "border-[#c9a227] bg-[#c9a227]/[0.06]" : step.tone === "wedding" ? "border-[#6e2a2a] bg-[#6e2a2a]/[0.08]" : "border-[#f5f0e6]/[0.16]"}`}>
                  <span className={`text-[9px] tracking-[0.1em] ${step.tone === "complete" ? "text-[#c9a227]" : step.tone === "wedding" ? "text-[#b06c63]" : "text-[#8b806e]"}`}>{step.number}</span>
                  <span className="text-xs leading-[1.25] text-[#f5f0e6]">{step.label}</span>
                </article>
                {index < WORKFLOW.length - 1 && <ArrowRight aria-hidden="true" className="mx-0.5 size-3.5 text-[#736a5b]" strokeWidth={1.5} />}
              </li>
            ))}
          </ol>
        </div>
        <p className="max-w-[600px] font-display text-[clamp(1.3rem,2.4vw,1.9rem)] font-medium italic text-[#c9a227]">
          Every wedding starts with rebuilding the team.
        </p>
      </div>
    </section>
  );
}
