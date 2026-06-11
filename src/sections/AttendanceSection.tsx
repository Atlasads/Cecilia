import { attendance } from '../data/siteContent';
import { FadeIn } from '../components/motion/FadeIn';
import { SectionLabel } from '../components/layout/SectionLabel';

export function AttendanceSection() {
  return (
    <section id="atendimento" className="relative overflow-hidden border-b border-white/10 bg-ink py-20 sm:py-28 lg:py-32">
      <span className="pointer-events-none absolute right-[-4%] top-10 text-[15vw] font-black uppercase leading-none text-white/[0.022]">Atendimento</span>
      <div className="section-shell">
        <FadeIn className="mx-auto max-w-[820px]">
          <SectionLabel>{attendance.label}</SectionLabel>
          <h2 className="hero-heading text-[clamp(2.8rem,5vw,5.5rem)] font-black uppercase leading-[0.9] tracking-[-0.06em]">
            Como é o meu <br />atendimento?
          </h2>
          <p className="mt-8 text-base font-light leading-relaxed text-[#A8ADB3] sm:text-lg">
            {attendance.text}
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {attendance.cards.map(({ icon: Icon, title, description }) => (
              <article key={title} className="dark-card rounded-3xl p-5">
                <Icon className="mb-5 h-9 w-9 text-[#BBCCD7]" strokeWidth={1.35} />
                <h3 className="mb-2 text-base font-medium text-white">{title}</h3>
                <p className="text-sm font-light leading-relaxed text-[#A8ADB3]">{description}</p>
              </article>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
