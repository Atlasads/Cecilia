import { Instagram, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { brand, images } from '../data/siteContent';
import { OutlineButton } from '../components/buttons/OutlineButton';
import { FadeIn } from '../components/motion/FadeIn';
import { Navbar } from '../components/layout/Navbar';

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden bg-texture">
      <Navbar />
      <div className="absolute inset-x-0 bottom-0 h-px bg-white/10" />
      <div className="section-shell relative flex min-h-screen items-center pt-24">
        <div className="relative z-30 w-full max-w-[520px] pt-16 sm:pt-24 lg:w-[48%] lg:max-w-none lg:pt-0">
          <FadeIn delay={0.1}>
            <h1 className="hero-heading text-[clamp(4.6rem,11vw,10.5rem)] font-black uppercase leading-[0.82] tracking-[-0.08em]">
              Oi, eu<br />sou a<br />Cecília
            </h1>
          </FadeIn>
          <FadeIn delay={0.25}>
            <p className="mt-8 max-w-[310px] text-lg font-light leading-snug text-[#D7E2EA] sm:text-xl">
              Tenho 24 anos e sou tatuadora especialista em Old School.
            </p>
          </FadeIn>
          <FadeIn delay={0.35}>
            <p className="mt-7 text-[0.62rem] font-light uppercase tracking-[0.4em] text-[#646973]">
              Vamos criar juntos?
            </p>
            <div className="mt-3 flex flex-wrap gap-3">
              <OutlineButton label="WhatsApp" href={brand.whatsapp} icon={<MessageCircle className="h-4 w-4" />} className="px-5 py-2.5" />
              <OutlineButton label="Instagram" href={brand.instagram} icon={<Instagram className="h-4 w-4" />} className="px-5 py-2.5" />
            </div>
          </FadeIn>
        </div>

        <div className="pointer-events-none absolute bottom-0 right-[-4%] z-20 w-[260px] translate-y-[22.3%] sm:right-[-2%] sm:w-[290px] md:w-[320px] lg:left-[46%] lg:right-auto lg:w-[490px] xl:w-[560px]">
          <motion.img
            src={images.heroCharacter}
            alt="Personagem 3D da tatuadora Cecília"
            className="w-full select-none drop-shadow-2xl"
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={{ opacity: 1, y: [0, -12, 0], rotate: [0, 0.5, 0], scale: 1 }}
            transition={{ opacity: { duration: 0.9, delay: 0.35 }, scale: { duration: 0.9, delay: 0.35 }, y: { duration: 6, repeat: Infinity, ease: 'easeInOut' }, rotate: { duration: 6, repeat: Infinity, ease: 'easeInOut' } }}
            style={{ willChange: 'transform' }}
          />
        </div>
      </div>
    </section>
  );
}
