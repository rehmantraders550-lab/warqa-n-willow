import React from 'react';
import { FadeIn, TextReveal } from './FadeIn';

export function Chapter05() {
  return (
    <section className="relative w-full py-32 md:py-48 px-4 md:px-8">
      <div className="grid grid-cols-12 gap-4 w-full">
        
        {/* Strong Statement */}
        <div className="col-span-12 mb-24 md:mb-32">
          <TextReveal>
            <h3 className="text-editorial-heading md:text-editorial-title tracking-editorial leading-editorial text-center max-w-4xl mx-auto">
              PROPORTION IS THE MEASURE<br/>OF UTILITY.
            </h3>
          </TextReveal>
        </div>

        {/* Object Comparison / Invisible Baseline */}
        <div className="col-span-12 flex flex-col items-center">
          <FadeIn duration={1.6} className="w-full">
            <div className="relative w-full h-[50vh] md:h-[60vh] max-w-5xl mx-auto flex items-end justify-around border-b border-true-black/20 pb-4">
              
              {/* Object 1 */}
              <div className="flex flex-col items-center gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=600&auto=format&fit=crop" 
                  alt="Profile" 
                  className="w-16 md:w-24 lg:w-32 object-contain mix-blend-multiply opacity-80"
                />
                <div className="text-precise-micro tracking-precise text-slate text-center uppercase">
                  Ø 60 × H 70<br/>220 ML
                </div>
              </div>

              {/* Object 2 */}
              <div className="flex flex-col items-center gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1577979749830-f1d742b96791?q=80&w=600&auto=format&fit=crop" 
                  alt="Profile" 
                  className="w-20 md:w-28 lg:w-40 object-contain mix-blend-multiply opacity-80"
                />
                <div className="text-precise-micro tracking-precise text-slate text-center uppercase">
                  Ø 78 × H 96<br/>250 ML
                </div>
              </div>

              {/* Object 3 */}
              <div className="flex flex-col items-center gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1584988755018-b2de9f0c2356?q=80&w=600&auto=format&fit=crop" 
                  alt="Profile" 
                  className="w-24 md:w-32 lg:w-48 object-contain mix-blend-multiply opacity-80"
                />
                <div className="text-precise-micro tracking-precise text-slate text-center uppercase">
                  Ø 85 × H 110<br/>320 ML
                </div>
              </div>

              {/* Baseline indicator */}
              <div className="absolute bottom-0 left-0 w-full flex justify-between text-precise-micro tracking-precise-loose text-slate/50 pb-1 uppercase">
                <span>0.00</span>
                <span>BASELINE</span>
              </div>
            </div>
          </FadeIn>
        </div>
        
      </div>
    </section>
  );
}
