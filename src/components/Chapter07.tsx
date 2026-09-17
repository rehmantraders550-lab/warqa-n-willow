import React from 'react';
import { FadeIn, TextReveal } from './FadeIn';

export function Chapter07() {
  return (
    <section className="relative w-full py-32 md:py-48 px-4 md:px-8 bg-slate/5 text-true-black transition-colors duration-1000">
      <div className="grid grid-cols-12 gap-4 w-full">
        
        {/* Title / Intro */}
        <div className="col-span-12 md:col-span-4 lg:col-span-3 mb-16 md:mb-0 pt-8 md:pt-16">
          <TextReveal>
            <h2 className="text-editorial-heading tracking-editorial leading-editorial mb-6">
              MASS AND<br/>SURFACE.
            </h2>
            <p className="text-precise-body text-true-black/70 max-w-xs text-balance leading-precise">
              Matte stoneware grounded by its own volume. An exploration of edge, shadow, and mineral density.
            </p>
          </TextReveal>
        </div>

        {/* Ceramic Image Dense Grid */}
        <div className="col-span-12 md:col-span-8 lg:col-span-8 md:col-start-5 lg:col-start-5 flex flex-col md:flex-row gap-4 md:gap-8">
          <FadeIn duration={1.4} delay={0.1} className="w-full md:w-3/5">
            <div className="aspect-[4/5] bg-[#d9d9d7] w-full overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=1500&auto=format&fit=crop" 
                alt="Matte Stoneware" 
                className="w-full h-full object-cover object-center mix-blend-multiply opacity-95"
              />
            </div>
          </FadeIn>
          
          <FadeIn duration={1.4} delay={0.3} className="w-full md:w-2/5 flex flex-col justify-end">
            <div className="aspect-square md:aspect-[3/4] bg-[#dbdbd9] w-full overflow-hidden mb-4">
              <img 
                src="https://images.unsplash.com/photo-1596489371903-88ec0c5ba5e4?q=80&w=1000&auto=format&fit=crop" 
                alt="Ceramic Edge Detail" 
                className="w-full h-full object-cover object-center mix-blend-multiply opacity-90 contrast-125 grayscale"
              />
            </div>
            <span className="text-precise-micro tracking-precise uppercase text-slate">STONEWARE / TEXTURE DETAIL</span>
          </FadeIn>
        </div>
        
      </div>
    </section>
  );
}
