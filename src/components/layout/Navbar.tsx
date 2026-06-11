import { ArrowUpRight, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { brand, navLinks } from '../../data/siteContent';
import { OutlineButton } from '../buttons/OutlineButton';
import { FadeIn } from '../motion/FadeIn';

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <FadeIn y={-20} className="absolute left-0 right-0 top-0 z-50">
        <header className="section-shell flex items-center justify-between py-7">
          <a href="#inicio" className="group leading-none">
            <span className="block text-base font-medium uppercase tracking-[0.55em] text-white sm:text-xl">{brand.name}</span>
            <span className="mt-2 block text-[0.55rem] font-light uppercase tracking-[0.35em] text-[#A8ADB3] sm:text-xs">{brand.subtitle}</span>
          </a>
          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.filter((l) => l.href !== '#contato').map((link) => (
              <a key={link.href} href={link.href} className="text-xs font-medium uppercase tracking-[0.24em] text-[#D7E2EA] transition hover:opacity-70">
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <OutlineButton label="Contato" href="#contato" icon={<ArrowUpRight className="h-4 w-4" />} className="hidden px-5 py-2.5 lg:inline-flex" />
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Fechar menu' : 'Abrir menu'}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-white/40 lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </header>
      </FadeIn>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-[#0C0C0C]/96 backdrop-blur-lg lg:hidden"
          >
            <div className="section-shell pb-8 pt-24">
              <nav className="flex flex-col">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="border-b border-white/[0.07] py-4 text-sm font-medium uppercase tracking-[0.22em] text-[#D7E2EA] transition hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              <a
                href={brand.whatsapp}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="mt-6 flex w-full items-center justify-center rounded-full py-3.5 text-xs font-semibold uppercase tracking-[0.22em] text-white outline outline-2 -outline-offset-[3px] outline-white"
                style={{
                  background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                  boxShadow: '0px 4px 4px rgba(181,1,167,0.25), 4px 4px 12px #7721B1 inset',
                }}
              >
                Agendar agora
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
