import React from 'react';
import { TextReveal } from './FadeIn';

export function Chapter09() {
  return (
    <section className="relative w-full py-32 md:py-48 px-4 md:px-8 bg-mist text-ink transition-colors duration-1000">
      <div className="grid grid-cols-12 gap-4 w-full">
        
        {/* Header / Intro */}
        <div className="col-span-12 flex flex-col items-center text-center">
          <TextReveal>
            <h2 className="text-editorial-heading tracking-editorial leading-editorial mb-8 font-primary max-w-3xl">
              From here, we make the letter.
            </h2>
            <p className="text-precise-body md:text-editorial-body text-ink/70 max-w-xl mx-auto text-balance leading-precise font-secondary mb-16">
              We will compose the final words, recommend the material treatment, confirm the physical presentation and prepare it for production.
            </p>
            <a href="#" className="inline-flex items-center text-precise-meta tracking-precise-loose font-medium uppercase hover:opacity-60 transition-opacity font-secondary text-ink border border-ink/20 px-8 py-4 rounded-full">
              CONTINUE ON WHATSAPP <span className="ml-3">↗</span>
            </a>
          </TextReveal>
        </div>
        
      </div>
    </section>
  );
}
