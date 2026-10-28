import React from 'react';
import { motion } from 'framer-motion';
import { smoothEase, AnimatedWords, defaultViewport } from './Motion';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  highlightWord?: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'between';
  theme?: 'light' | 'dark';
  action?: {
    label: string;
    onClick: () => void;
  };
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  highlightWord,
  subtitle,
  align = 'left',
  theme = 'light',
  action,
  className = ''
}) => {
  const isDark = theme === 'dark';

  if (align === 'between' && (subtitle || action)) {
    return (
      <div className={`flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 md:mb-12 ${className}`}>
        <div className="max-w-2xl">
          {eyebrow && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={defaultViewport}
              transition={{ duration: 0.4, ease: smoothEase }}
              className="text-xs font-bold tracking-widest uppercase text-[#0798F2] mb-2.5"
            >
              {eyebrow}
            </motion.p>
          )}
          <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-[#062747]'}`}>
            <AnimatedWords text={title} highlightWord={highlightWord} />
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={defaultViewport}
          transition={{ duration: 0.5, delay: 0.15, ease: smoothEase }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4 shrink-0"
        >
          {subtitle && (
            <p className={`text-sm md:text-base max-w-md ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              {subtitle}
            </p>
          )}
          {action && (
            <button
              onClick={action.onClick}
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-[#0798F2] hover:text-[#0584d4] transition-colors whitespace-nowrap cursor-pointer"
            >
              <span>{action.label}</span>
              <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">→</span>
            </button>
          )}
        </motion.div>
      </div>
    );
  }

  return (
    <div className={`mb-10 md:mb-12 ${align === 'center' ? 'text-center mx-auto max-w-2xl' : 'max-w-2xl'} ${className}`}>
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={defaultViewport}
          transition={{ duration: 0.4, ease: smoothEase }}
          className="text-xs font-bold tracking-widest uppercase text-[#0798F2] mb-2.5"
        >
          {eyebrow}
        </motion.p>
      )}

      <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-3 ${isDark ? 'text-white' : 'text-[#062747]'}`}>
        <AnimatedWords text={title} highlightWord={highlightWord} />
      </h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={defaultViewport}
          transition={{ duration: 0.5, delay: 0.15, ease: smoothEase }}
          className={`text-sm md:text-base leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};
