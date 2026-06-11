import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type ContactButtonProps = {
  label?: string;
  href: string;
  icon?: ReactNode;
  className?: string;
};

export function ContactButton({ label = 'Contact Me', href, icon, className = '' }: ContactButtonProps) {
  return (
    <motion.a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer' : undefined}
      whileHover={{ scale: 1.035, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`inline-flex items-center justify-center gap-3 rounded-full px-7 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-white outline outline-2 -outline-offset-[3px] outline-white shadow-glow transition-all sm:px-9 sm:py-3.5 ${className}`}
      style={{
        background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
      }}
    >
      {label}
      {icon}
    </motion.a>
  );
}
