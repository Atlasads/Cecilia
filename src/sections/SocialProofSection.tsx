import { Instagram, MessageCircle } from 'lucide-react';
import { brand, images, socialProof } from '../data/siteContent';
import { OutlineButton } from '../components/buttons/OutlineButton';
import { StatCard } from '../components/cards/StatCard';
import { TestimonialCard } from '../components/cards/TestimonialCard';
import { FadeIn } from '../components/motion/FadeIn';
import { SectionLabel } from '../components/layout/SectionLabel';

export function SocialProofSection() {
  return (
    <section id="provas" className="relative overflow-hidden border-b border-white/10 bg-[#090909] py-20 sm:py-28 lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_45%,rgba(187,204,215,.06),transparent_35rem)]" />
      <div className="section-shell relative z-10">
        <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.05fr_1fr]">
          <FadeIn>
            <SectionLabel>{socialProof.label}</SectionLabel>
            <h2 className="hero-heading text-[clamp(3rem,5.5vw,5.5rem)] font-black uppercase leading-[0.9] tracking-[-0.065em]">
              Provas<br />sociais
            </h2>
            <p className="mt-7 max-w-[330px] text-lg font-light leading-snug text-[#A8ADB3]">{socialProof.subtitle}</p>
            <div className="mt-10 grid grid-cols-3 gap-3 lg:grid-cols-1 xl:grid-cols-3">
              {socialProof.stats.map((stat) => <StatCard key={stat.title} {...stat} />)}
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="dark-card overflow-hidden rounded-[2rem] p-1">
              <img src={images.socialPhoto} alt="Cecília em ambiente de tatuagem" className="h-[420px] w-full rounded-[1.7rem] object-cover object-center lg:h-[560px]" loading="lazy" />
            </div>
          </FadeIn>
          <div className="space-y-4">
            {socialProof.testimonials.map((item, index) => (
              <FadeIn key={item.name} delay={0.12 + index * 0.08} y={26}>
                <TestimonialCard {...item} />
              </FadeIn>
            ))}
          </div>
        </div>
        <FadeIn delay={0.2}>
          <div className="dark-card mt-12 rounded-[2rem] p-6 text-center sm:p-8">
            <p className="text-base font-light text-[#A8ADB3] sm:text-lg">Quer ver mais trabalhos ou tirar sua ideia do papel?</p>
            <h3 className="hero-heading mt-1 text-3xl font-semibold tracking-tight sm:text-4xl">Fala comigo.</h3>
            <div className="mt-7 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <OutlineButton label="Instagram" href={brand.instagram} icon={<Instagram className="h-5 w-5" />} className="w-full max-w-[300px]" />
              <OutlineButton label="WhatsApp" href={brand.whatsapp} icon={<MessageCircle className="h-5 w-5" />} className="w-full max-w-[300px]" />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
