import { about, images } from '../data/siteContent';
import { FadeIn } from '../components/motion/FadeIn';
import { SectionLabel } from '../components/layout/SectionLabel';

export function AboutSection() {
  return (
    <section id="sobre" className="relative overflow-hidden border-b border-white/10 bg-ink py-20 sm:py-28 lg:py-32">
      <span className="pointer-events-none absolute left-[8%] top-6 text-[15vw] font-black uppercase leading-none text-white/[0.018]">Arte</span>
      <div className="section-shell grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-24">
        <FadeIn>
          <SectionLabel>{about.label}</SectionLabel>
          <h2 className="hero-heading text-[clamp(2.8rem,5vw,4.8rem)] font-black uppercase leading-[0.94] tracking-[-0.055em]">
            {about.title}
          </h2>
          <p className="mt-8 max-w-[530px] text-base font-light leading-relaxed text-[#A8ADB3] sm:text-lg">
            {about.text}
          </p>
          <p className="mt-8 max-w-[500px] text-base font-light italic leading-relaxed text-[#D7E2EA]/65 sm:text-lg">{about.signature}</p>
        </FadeIn>
        <FadeIn delay={0.15} y={50}>
          <div className="dark-card mx-auto max-w-[520px] overflow-hidden rounded-[2.2rem] p-2 shadow-softline">
            <img src={images.aboutPhoto} alt="Cecília segurando máquina de tatuagem" className="h-[560px] w-full rounded-[1.8rem] object-cover object-center" loading="lazy" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
