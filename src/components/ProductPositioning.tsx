import React from 'react';
import { FadeIn } from './FadeIn';

export function ProductPositioning() {
  return (
    <section className="relative w-full py-24 md:py-32 px-4 md:px-8 bg-waraq border-t border-ink/10">
      <div className="grid grid-cols-12 gap-4 w-full">
        {/* The Four Ideas */}
        <div className="col-span-12 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          
          <FadeIn delay={0.1}>
            <div className="flex flex-col">
              <span className="text-precise-meta tracking-precise-loose uppercase text-willow mb-6 font-secondary border-b border-ink/10 pb-4">WORDS</span>
              <h4 className="text-editorial-body tracking-editorial font-primary text-ink leading-editorial">
                Composed around what you actually mean.
              </h4>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="flex flex-col">
              <span className="text-precise-meta tracking-precise-loose uppercase text-willow mb-6 font-secondary border-b border-ink/10 pb-4">PAPER</span>
              <h4 className="text-editorial-body tracking-editorial font-primary text-ink leading-editorial">
                Chosen to suit the character of the letter.
              </h4>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-col">
              <span className="text-precise-meta tracking-precise-loose uppercase text-willow mb-6 font-secondary border-b border-ink/10 pb-4">MAKING</span>
              <h4 className="text-editorial-body tracking-editorial font-primary text-ink leading-editorial">
                Printed, folded and prepared with restraint.
              </h4>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="flex flex-col">
              <span className="text-precise-meta tracking-precise-loose uppercase text-willow mb-6 font-secondary border-b border-ink/10 pb-4">ARRIVAL</span>
              <h4 className="text-editorial-body tracking-editorial font-primary text-ink leading-editorial">
                Presented as something worth keeping.
              </h4>
            </div>
          </FadeIn>
          
        </div>
      </div>
    </section>
  );
}
