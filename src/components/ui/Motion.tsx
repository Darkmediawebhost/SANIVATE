import React from 'react';
import { motion, type HTMLMotionProps, type Variants } from 'framer-motion';

// Common easing curves for premium industrial feel
export const smoothEase = [0.16, 1, 0.3, 1] as const;

// Viewport configuration for scroll-triggered whileInView animations
export const defaultViewport = {
  once: true,
  margin: '0px 0px -60px 0px',
  amount: 0.15,
} as const;

export const fadeInVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: custom,
      ease: smoothEase,
    },
  }),
};

export const cardRevealVariants: Variants = {
  hidden: { opacity: 0, y: 32, scale: 0.98 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: custom,
      ease: smoothEase,
    },
  }),
};

export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 28, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: smoothEase,
    },
  },
};

interface FadeInProps extends HTMLMotionProps<'div'> {
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  children: React.ReactNode;
  className?: string;
  viewportOnce?: boolean;
}

export const FadeIn: React.FC<FadeInProps> = ({
  delay = 0,
  direction = 'up',
  distance = 24,
  children,
  className = '',
  viewportOnce = true,
  ...props
}) => {
  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { opacity: 0, y: distance };
      case 'down':
        return { opacity: 0, y: -distance };
      case 'left':
        return { opacity: 0, x: distance };
      case 'right':
        return { opacity: 0, x: -distance };
      case 'none':
      default:
        return { opacity: 0 };
    }
  };

  const getTargetPosition = () => {
    switch (direction) {
      case 'up':
      case 'down':
        return { opacity: 1, y: 0 };
      case 'left':
      case 'right':
        return { opacity: 1, x: 0 };
      case 'none':
      default:
        return { opacity: 1 };
    }
  };

  return (
    <motion.div
      initial={getInitialPosition()}
      whileInView={getTargetPosition()}
      viewport={{ once: viewportOnce, margin: defaultViewport.margin, amount: defaultViewport.amount }}
      transition={{ duration: 0.6, delay, ease: smoothEase }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

interface AnimatedWordsProps {
  text: string;
  className?: string;
  highlightWord?: string;
  delay?: number;
}

export const AnimatedWords: React.FC<AnimatedWordsProps> = ({
  text,
  className = '',
  highlightWord,
  delay = 0,
}) => {
  const words = text.split(' ');

  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      transition={{ staggerChildren: 0.04, delayChildren: delay }}
      className={`inline-block ${className}`}
    >
      {words.map((word, index) => {
        const isHighlight =
          highlightWord &&
          word.toLowerCase().includes(highlightWord.toLowerCase());

        return (
          <motion.span
            key={index}
            variants={{
              hidden: { opacity: 0, y: 16, filter: 'blur(4px)' },
              visible: {
                opacity: 1,
                y: 0,
                filter: 'blur(0px)',
                transition: { duration: 0.45, ease: smoothEase },
              },
            }}
            className={`inline-block mr-[0.28em] ${
              isHighlight ? 'text-[#0798F2]' : ''
            }`}
          >
            {word}
          </motion.span>
        );
      })}
    </motion.span>
  );
};
