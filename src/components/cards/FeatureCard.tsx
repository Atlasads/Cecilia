import type { ElementType } from 'react';

type FeatureCardProps = {
  icon: ElementType;
  title: string;
  description: string;
};

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <article className="dark-card rounded-2xl p-4 transition hover:-translate-y-1 hover:border-white/25 sm:p-5">
      <Icon className="mb-4 h-6 w-6 text-[#BBCCD7]" strokeWidth={1.5} />
      <h3 className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#F2F2F2] sm:text-sm">{title}</h3>
      <p className="text-xs font-light leading-relaxed text-[#A8ADB3] sm:text-sm">{description}</p>
    </article>
  );
}
