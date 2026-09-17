import React from 'react';
import { FadeIn, TextReveal } from './FadeIn';

export function Chapter08() {
  return (
    <section className="relative w-full py-24 md:py-40 px-4 md:px-8">
      <div className="grid grid-cols-12 gap-4 w-full items-center">
        
        {/* Left Side: Geometry image */}
        <div className="col-span-12 md:col-span-5 lg:col-span-6 mb-16 md:mb-0">
          <FadeIn duration={1.6}>
            <div className="aspect-[4/3] md:aspect-square bg-[#e8e8e6] w-full overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1584988755018-b2de9f0c2356?q=80&w=1500&auto=format&fit=crop" 
                alt="Corrugated Grid Partition" 
                className="w-full h-full object-cover object-center mix-blend-multiply opacity-80 sepia-[.2] hue-rotate-[30deg] saturate-50"
              />
            </div>
          </FadeIn>
        </div>

        {/* Right Side: Packaging Details */}
        <div className="col-span-12 md:col-span-6 lg:col-span-5 md:col-start-7 flex flex-col justify-center pl-0 md:pl-12">
          <TextReveal>
            <h3 className="text-editorial-heading md:text-editorial-title tracking-editorial leading-editorial mb-8">
              STRUCTURAL<br/>CONTAINMENT.
            </h3>
            
            <div className="flex flex-col gap-6 text-precise-meta tracking-precise uppercase text-true-black/80 font-medium">
              <div className="flex flex-col gap-1 pb-4 border-b border-true-black/10">
                <span className="text-true-black">EXTERIOR</span>
                <span className="text-slate">INSIDE-OUT 5-PLY CORRUGATED</span>
                <span className="text-slate">BLACK FLEXOGRAPHIC PRINTING</span>
              </div>
              
              <div className="flex flex-col gap-1 pb-4 border-b border-true-black/10">
                <span className="text-true-black">INTERIOR</span>
                <span className="text-slate">CROSS-PARTITION SYSTEM</span>
                <span className="text-slate">HIGH-DENSITY HONEYCOMB KRAFT</span>
              </div>
              
              <div className="flex flex-col gap-1">
                <span className="text-true-black">PRINCIPLE</span>
                <span className="text-slate">MATERIAL EFFICIENCY</span>
                <span className="text-slate">NO BUBBLE-WRAP AESTHETIC</span>
              </div>
            </div>
          </TextReveal>
        </div>
        
      </div>
    </section>
  );
}
