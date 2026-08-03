import type { ReactNode } from "react";

type StampProps = {
  children: ReactNode;
};

export function Stamp({ children }: StampProps) {
  return (
    <p className="mt-3 w-fit border border-[#b06c63] bg-[#6e2a2a]/[0.08] px-3.5 py-1.5 text-[11px] uppercase tracking-[0.12em] text-[#b06c63]">
      {children}
    </p>
  );
}
