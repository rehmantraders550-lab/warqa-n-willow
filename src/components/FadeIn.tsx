import { motion } from 'motion/react';
import React, { ReactNode } from 'react';
import { motionTokens } from '../lib/motion';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  key?: React.Key;
}

export function FadeIn({ children, delay = 0, duration = motionTokens.slow, className = '' }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.015 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ 
        duration: duration, 
        delay: delay, 
        ease: motionTokens.ease
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function TextReveal({ children, delay = 0, className = '' }: FadeInProps) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-5%" }}
        transition={{ 
          duration: motionTokens.normal, 
          delay: delay, 
          ease: motionTokens.ease
        }}
        className={className}
      >
        {children}
      </motion.div>
    );
}
