type FrameHeaderProps = {
  frame: string;
  title: string;
  className?: string;
};

export function FrameHeader({ frame, title, className = "mb-9" }: FrameHeaderProps) {
  return (
    <header className={`flex items-center gap-3.5 ${className}`}>
      <span className="border border-[#c9a227] px-2.5 py-1 text-xs tracking-[0.14em] text-[#c9a227]">
        {frame}
      </span>
      <span
        aria-hidden="true"
        className="h-px flex-1 bg-[repeating-linear-gradient(90deg,rgba(245,240,230,0.25)_0_4px,transparent_4px_9px)]"
      />
      <span className="text-[11px] uppercase tracking-[0.14em] text-[#8b806e]">{title}</span>
    </header>
  );
}
