import type { ReactNode } from "react";

type FlowCardProps = {
  value: string;
  label: ReactNode;
  highlighted?: boolean;
};

export function FlowCard({ value, label, highlighted = false }: FlowCardProps) {
  return (
    <article className={`border bg-[#1d1815] px-[18px] py-3.5 text-center ${highlighted ? "border-[#c9a227] bg-[#c9a227]/[0.08]" : "border-[#f5f0e6]/[0.16]"}`}>
      <p className={`font-display text-base font-semibold ${highlighted ? "text-[#c9a227]" : "text-[#f5f0e6]"}`}>{value}</p>
      <p className="mt-1 text-[9px] uppercase leading-normal tracking-[0.08em] text-[#8b806e]">{label}</p>
    </article>
  );
}
