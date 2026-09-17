import React from 'react';
import { FadeIn, TextReveal } from './FadeIn';

export function Chapter03() {
  return (
    <section className="relative w-full py-32 md:py-48 px-4 md:px-8 bg-waraq">
      <div className="grid grid-cols-12 gap-4 w-full items-center">
        
        {/* Negative Space & Text */}
        <div className="col-span-12 md:col-span-5 lg:col-span-6 flex items-center md:justify-center mb-16 md:mb-0">
          <TextReveal>
            <h3 className="text-editorial-heading tracking-editorial leading-editorial font-primary text-ink">
              PAPER BECOMES<br/>MATERIAL.
            </h3>
          </TextReveal>
        </div>

        {/* Macro Image */}
        <div className="col-span-12 md:col-span-7 lg:col-span-5 md:col-start-8">
          <FadeIn duration={1.8}>
            <div className="aspect-square bg-mist w-full overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1620121478247-ec786f9be423?q=80&w=1500&auto=format&fit=crop" 
                alt="Macro Material Study" 
                className="w-full h-full object-cover object-center mix-blend-multiply opacity-90 contrast-125 grayscale"
              />
            </div>
          </FadeIn>
          <div className="mt-4 flex justify-end">
            <span className="text-precise-micro tracking-precise-loose text-willow uppercase font-secondary">MATERIAL STUDY / 01</span>
          </div>
        </div>

      </div>
    </section>
  );
}
