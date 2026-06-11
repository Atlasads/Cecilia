import { Instagram, MapPin, MessageCircle, Clock } from 'lucide-react';
import { brand, footer, images, navLinks } from '../../data/siteContent';

export function Footer() {
  return (
    <footer id="contato" className="relative overflow-hidden bg-[#080808] py-16">
      <div className="section-shell">
        <div className="metal-line mb-14 h-px" />
        <div className="grid gap-10 lg:grid-cols-[1.1fr_.9fr_1.1fr_1.1fr_1.15fr]">
          <div>
            <h2 className="text-3xl font-medium uppercase tracking-[0.55em] text-white">{brand.name}</h2>
            <p className="mt-3 text-xs font-light uppercase tracking-[0.38em] text-[#A8ADB3]">{brand.subtitle}</p>
            <p className="mt-10 max-w-[300px] text-base font-light leading-relaxed text-[#A8ADB3]">{footer.phrase}</p>
            <div className="mt-8 flex gap-4">
              <a aria-label="Instagram" href={brand.instagram} target="_blank" rel="noreferrer" className="text-white/80 transition hover:text-white"><Instagram /></a>
              <a aria-label="WhatsApp" href={brand.whatsapp} target="_blank" rel="noreferrer" className="text-white/80 transition hover:text-white"><MessageCircle /></a>
            </div>
          </div>
          <nav>
            <h3 className="mb-6 text-xs font-medium uppercase tracking-[0.35em] text-[#BBCCD7]">Navegue</h3>
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => <a key={link.href} href={link.href} className="text-sm font-light text-[#D7E2EA] transition hover:text-white">{link.label}</a>)}
            </div>
          </nav>
          <div>
            <h3 className="mb-6 text-xs font-medium uppercase tracking-[0.35em] text-[#BBCCD7]">Atendimento</h3>
            <div className="space-y-6 text-sm font-light text-[#A8ADB3]">
              <p className="flex gap-3"><Clock className="h-5 w-5 text-[#BBCCD7]" /> <span><strong className="block font-medium text-white">Segunda a Sábado</strong>10h às 19h</span></p>
              <p className="flex gap-3"><MessageCircle className="h-5 w-5 text-[#BBCCD7]" /> <span><strong className="block font-medium text-white">Agendamento via WhatsApp</strong>Fale comigo e garanta seu horário.</span></p>
            </div>
          </div>
          <div>
            <h3 className="mb-6 text-xs font-medium uppercase tracking-[0.35em] text-[#BBCCD7]">Localização</h3>
            <p className="flex gap-3 text-sm font-light text-[#A8ADB3]"><MapPin className="h-5 w-5 text-[#BBCCD7]" /> <span><strong className="block font-medium text-white">{brand.location}</strong>Atendimento com hora marcada.</span></p>
          </div>
          <div className="hidden items-end justify-end lg:flex">
            <img src={images.footerPhoto} alt="Cecília segurando máquina de tatuagem" className="max-h-[300px] object-contain opacity-90" loading="lazy" />
          </div>
        </div>
        <div className="metal-line my-12 h-px" />
        <div className="flex flex-col justify-between gap-4 text-sm font-light text-[#A8ADB3] sm:flex-row">
          <p>{footer.copyright}</p>
          <p>{footer.credit}</p>
        </div>
      </div>
    </footer>
  );
}
