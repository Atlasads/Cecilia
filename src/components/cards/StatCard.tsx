import type { ElementType } from 'react';

type StatCardProps = {
  icon: ElementType;
  value?: string;
  title: string;
  description?: string;
};

export function StatCard({ icon: Icon, value, title, description }: StatCardProps) {
  return (
    <article className="flex min-h-[110px] flex-col justify-between rounded-2xl border border-white/10 bg-black/25 p-4 backdrop-blur transition hover:border-white/25">
      <Icon className="h-6 w-6 text-[#BBCCD7]" strokeWidth={1.4} />
      <div>
        {value && <strong className="block text-xl font-semibold text-white">{value}</strong>}
        <p className="text-xs font-light leading-snug text-[#A8ADB3] sm:text-sm">{title}</p>
        {description && <span className="mt-1 block text-xs text-[#646973]">{description}</span>}
      </div>
    </article>
  );
}
