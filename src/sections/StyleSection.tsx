import { motion } from 'framer-motion';
import { images, styleContent } from '../data/siteContent';
import { FeatureCard } from '../components/cards/FeatureCard';
import { FadeIn } from '../components/motion/FadeIn';
import { SectionLabel } from '../components/layout/SectionLabel';

export function StyleSection() {
  return (
    <section id="estilo" className="relative overflow-hidden border-b border-white/10 bg-[#0A0A0A] py-20 sm:py-28 lg:py-32">
      <span className="pointer-events-none absolute left-[18%] top-1/2 -translate-y-1/2 text-[26vw] font-black leading-none text-white/[0.015]">OLD</span>
      <div className="section-shell grid items-center gap-12 lg:grid-cols-[0.98fr_1.02fr] lg:gap-16">
        <FadeIn>
          <SectionLabel>{styleContent.label}</SectionLabel>
          <h2 className="hero-heading text-[clamp(3rem,5.5vw,5.5rem)] font-black uppercase leading-[0.9] tracking-[-0.065em]">
            Meu estilo é <br />Old School
          </h2>
          <div className="mt-8 max-w-[590px] space-y-5 text-base font-light leading-relaxed text-[#A8ADB3] sm:text-lg">
            <p>{styleContent.text1}</p>
            <p>{styleContent.text2}</p>
          </div>
          <motion.div
            className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          >
            {styleContent.features.map((feature) => (
              <motion.div key={feature.title} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                <FeatureCard {...feature} />
              </motion.div>
            ))}
          </motion.div>
        </FadeIn>
        <motion.div
          className="grid grid-cols-2 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
        >
          {images.tattoos.map((tattoo, index) => (
            <motion.div key={tattoo} className="dark-card overflow-hidden rounded-[1.8rem] p-1" variants={{ hidden: { opacity: 0, y: 26 }, visible: { opacity: 1, y: 0 } }}>
              <img src={tattoo} alt={`Tatuagem Old School feita por Cecília ${index + 1}`} className="h-[250px] w-full rounded-[1.45rem] object-cover sm:h-[330px] lg:h-[380px]" loading="lazy" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
