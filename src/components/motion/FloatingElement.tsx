import { motion } from 'framer-motion';

type FloatingElementProps = {
  src: string;
  alt: string;
  className?: string;
  duration?: number;
  delay?: number;
};

export function FloatingElement({ src, alt, className = '', duration = 6, delay = 0 }: FloatingElementProps) {
  return (
    <motion.img
      src={src}
      alt={alt}
      className={`pointer-events-none absolute select-none object-contain opacity-90 drop-shadow-2xl ${className}`}
      animate={{ y: [0, -10, 0], x: [0, 4, 0], rotate: [0, 2, 0] }}
      transition={{ duration, delay, repeat: Infinity, ease: 'easeInOut' }}
      style={{ willChange: 'transform' }}
      loading="eager"
    />
  );
}
