type SectionLabelProps = {
  children: string;
  className?: string;
};

export function SectionLabel({ children, className = '' }: SectionLabelProps) {
  return (
    <div className={`mb-6 ${className}`}>
      <span className="block text-[0.65rem] font-medium uppercase tracking-[0.45em] text-[#A8ADB3]">{children}</span>
      <span className="mt-4 block h-px w-20 bg-[#BBCCD7]/50" />
    </div>
  );
}
