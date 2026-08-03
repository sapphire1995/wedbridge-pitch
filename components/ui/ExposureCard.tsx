import type { LucideIcon } from "lucide-react";

type ExposureCardProps = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export function ExposureCard({ number, title, description, icon: Icon }: ExposureCardProps) {
  return (
    <article className="flex min-w-0 flex-1 flex-col gap-4 border border-[#f5f0e6]/[0.16] bg-[#1d1815] px-[22px] py-[26px] transition-colors duration-200 hover:border-[#c9a227]">
      <div className="flex items-center justify-between">
        <span className="text-[10px] tracking-[0.12em] text-[#8b806e]">EXP. {number}</span>
        <Icon aria-hidden="true" className="size-[18px] text-[#c9a227]" strokeWidth={1.4} />
      </div>
      <h3 className="font-display text-[22px] font-semibold tracking-[-0.01em] text-[#f5f0e6]">{title}</h3>
      <p className="text-xs leading-[1.6] text-[#b8ac98]">{description}</p>
    </article>
  );
}
