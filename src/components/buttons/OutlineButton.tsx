import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type OutlineButtonProps = {
  label: string;
  href: string;
  icon?: ReactNode;
  className?: string;
};

export function OutlineButton({ label, href, icon, className = '' }: OutlineButtonProps) {
  return (
    <motion.a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer' : undefined}
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`inline-flex items-center justify-center gap-3 rounded-full border border-white/25 px-6 py-3 text-xs font-medium uppercase tracking-[0.26em] text-[#F2F2F2] transition hover:border-[#B600A8]/70 hover:bg-white/[0.035] hover:shadow-glow ${className}`}
    >
      {icon}
      {label}
    </motion.a>
  );
}
