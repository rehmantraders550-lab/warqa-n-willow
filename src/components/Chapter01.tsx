import React, { useRef } from 'react';
import { FadeIn } from './FadeIn';
import { Logo } from './Logo';
import { motion, useScroll, useTransform } from 'motion/react';
import { motionTokens } from '../lib/motion';

export function Chapter01() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  // Subtle parallax movement for the image
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section ref={containerRef} className="relative w-full h-[100svh] min-h-[800px] flex items-center md:items-end md:pb-24 pt-32 px-4 md:px-8 bg-waraq overflow-hidden">
      <div className="grid grid-cols-12 gap-4 w-full h-full max-h-[80vh]">
        
        {/* Photographic Field */}
        <div className="col-span-12 md:col-span-7 h-[60vh] md:h-full relative overflow-hidden bg-mist">
          <FadeIn duration={motionTokens.slow * 1.8} className="w-full h-full overflow-hidden">
            <motion.img 
              style={{ y }}
              src="https://images.unsplash.com/photo-1594968840259-2c700be74b6a?q=80&w=2000&auto=format&fit=crop" 
              alt="Hands folding paper" 
              className="w-full h-[120%] -mt-[10%] object-cover object-center mix-blend-multiply opacity-90 contrast-125 grayscale-[0.2]"
            />
          </FadeIn>

          {/* Logo */}
          <div className="absolute top-4 left-4 md:top-8 md:left-8 z-10 text-ink">
             <Logo className="w-auto" />
          </div>
          
          <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 z-10 flex flex-col text-precise-micro tracking-precise-loose uppercase text-ink font-medium font-secondary">
            <span>A HOUSE OF</span>
            <span>PERSONAL EXPRESSION</span>
          </div>
        </div>

        {/* Text Composition */}
        <div className="col-span-12 md:col-span-5 flex flex-col justify-end md:pl-12 pt-12 md:pt-0">
          <FadeIn delay={0.4} duration={motionTokens.slow * 1.4}>
            <h1 className="text-editorial-display tracking-editorial leading-editorial mb-8 font-primary text-ink">
              THE LETTER
            </h1>
            <p className="text-editorial-heading text-ink/90 max-w-lg mb-6 text-balance leading-editorial font-primary italic">
              A deeply personal letter, composed from what you mean—and made to be kept.
            </p>
            <p className="text-precise-body md:text-editorial-body text-ink/70 max-w-md mb-12 text-balance leading-precise font-secondary">
              You bring the feeling, the memory, the unfinished thought. We help it find its words, its paper, and finally its place in someone's hands.
            </p>
            
            <a href="#letter" className="inline-flex items-center text-precise-meta tracking-precise-loose font-medium uppercase hover:opacity-60 transition-opacity font-secondary text-ink">
              BEGIN A LETTER <span className="ml-2">↘</span>
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

