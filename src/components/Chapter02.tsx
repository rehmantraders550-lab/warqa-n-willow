import React from 'react';
import { FadeIn, TextReveal } from './FadeIn';

export function Chapter02() {
  return (
    <section id="letter" className="relative w-full py-24 md:py-40 px-4 md:px-8 bg-waraq border-t border-ink/10">
      <div className="grid grid-cols-12 gap-4 w-full">
        
        {/* Title */}
        <div className="col-span-12 md:col-span-4 lg:col-span-4 flex flex-col pt-12 md:pt-0 mb-16 md:mb-0">
          <TextReveal delay={0.2}>
            <h2 className="text-editorial-heading tracking-editorial font-medium mb-6 font-primary text-ink text-balance">
              Something true, given form.
            </h2>
          </TextReveal>
        </div>

        {/* 3 Layers */}
        <div className="col-span-12 md:col-span-7 lg:col-span-7 md:col-start-6 lg:col-start-6 flex flex-col gap-16 md:gap-24">
          <FadeIn duration={1.6} delay={0.1}>
            <div className="flex flex-col gap-4">
              <span className="text-precise-meta tracking-precise-loose font-medium uppercase text-willow font-secondary">1 — The Expression</span>
              <p className="text-editorial-body md:text-editorial-heading tracking-editorial text-ink font-primary leading-editorial">
                WARAQ & WILLOW listens, understands and composes the words.
              </p>
            </div>
          </FadeIn>
          <FadeIn duration={1.6} delay={0.2}>
            <div className="flex flex-col gap-4">
              <span className="text-precise-meta tracking-precise-loose font-medium uppercase text-willow font-secondary">2 — The Making</span>
              <p className="text-editorial-body md:text-editorial-heading tracking-editorial text-ink font-primary leading-editorial">
                The letter is typeset, printed on a considered paper, paired with an envelope and prepared with restrained presentation.
              </p>
            </div>
          </FadeIn>
          <FadeIn duration={1.6} delay={0.3}>
            <div className="flex flex-col gap-4">
              <span className="text-precise-meta tracking-precise-loose font-medium uppercase text-willow font-secondary">3 — The Arrival</span>
              <p className="text-editorial-body md:text-editorial-heading tracking-editorial text-ink font-primary leading-editorial">
                A finished physical piece is delivered to the recipient—or to the sender, depending on the order.
              </p>
            </div>
          </FadeIn>
        </div>
        
      </div>
    </section>
  );
}
