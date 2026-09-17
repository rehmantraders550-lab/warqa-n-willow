import React from 'react';
import { FadeIn, TextReveal } from './FadeIn';

export function Chapter06() {
  return (
    <section className="relative w-full py-24 md:py-32 px-4 md:px-8 border-t border-true-black/10">
      <div className="grid grid-cols-12 gap-4 w-full">
        
        {/* Technical Marginalia */}
        <div className="col-span-12 md:col-span-3 lg:col-span-2 flex flex-col pt-8 text-precise-micro tracking-precise uppercase text-slate font-medium gap-8 order-2 md:order-1">
          <TextReveal delay={0.1}>
            <div className="flex flex-col gap-1 border-l border-slate/30 pl-3">
              <span className="text-true-black">PRODUCTION</span>
              <span>MOUTH-BLOWN</span>
              <span>ANNEALED AT 500°C</span>
            </div>
          </TextReveal>
          
          <TextReveal delay={0.2}>
            <div className="flex flex-col gap-1 border-l border-slate/30 pl-3">
              <span className="text-true-black">MEASUREMENT</span>
              <span>WALL THICKNESS / 2.4 MM</span>
              <span>TOLERANCE / ±0.2 MM</span>
            </div>
          </TextReveal>

          <TextReveal delay={0.3}>
            <div className="flex flex-col gap-1 border-l border-slate/30 pl-3">
              <span className="text-true-black">MATERIAL</span>
              <span>BOROSILICATE GLASS 3.3</span>
              <span>THERMAL SHOCK RESISTANT</span>
            </div>
          </TextReveal>
        </div>

        {/* Process Image */}
        <div className="col-span-12 md:col-span-8 lg:col-span-9 md:col-start-5 lg:col-start-4 order-1 md:order-2">
          <FadeIn duration={1.6}>
            <div className="aspect-[4/3] md:aspect-[21/9] bg-[#e1e1df] w-full overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1596489371903-88ec0c5ba5e4?q=80&w=2000&auto=format&fit=crop" 
                alt="Measurement and Calipers" 
                className="absolute inset-0 w-full h-full object-cover object-center mix-blend-multiply opacity-80"
              />
              <div className="absolute top-4 right-4 text-precise-micro tracking-precise-loose text-true-black/50 uppercase">
                ENGINEERING / PROCESS
              </div>
            </div>
          </FadeIn>
        </div>
        
      </div>
    </section>
  );
}
