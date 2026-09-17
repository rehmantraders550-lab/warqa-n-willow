import React from 'react';
import { TextReveal } from './FadeIn';
import { Logo } from './Logo';

export function Chapter10() {
  return (
    <footer className="relative w-full bg-true-black text-bone pt-32 pb-8 px-4 md:px-8 flex flex-col min-h-[70vh] justify-between">
      
      {/* Closing Statement */}
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto pt-16 md:pt-24 mb-32">
        <TextReveal>
          <h2 className="text-editorial-title md:text-editorial-display tracking-editorial leading-editorial mb-8">
            USEFUL OBJECTS.<br/>QUIETLY RESOLVED.
          </h2>
          <div className="text-precise-meta tracking-precise-loose font-medium uppercase text-bone/50">
            KHATT OBJECT ARCHIVE
          </div>
        </TextReveal>
      </div>

      {/* Footer Links */}
      <div className="grid grid-cols-12 gap-4 w-full text-precise-meta tracking-precise font-medium uppercase">
        <div className="col-span-12 md:col-span-3 mb-8 md:mb-0">
          <Logo className="w-16 text-bone" />
        </div>
        
        <div className="col-span-6 md:col-span-2 flex flex-col gap-4 text-bone/60">
          <a href="#" className="hover:text-bone transition-colors">SHOP</a>
          <a href="#" className="hover:text-bone transition-colors">ABOUT</a>
          <a href="#" className="hover:text-bone transition-colors">JOURNAL</a>
          <a href="#" className="hover:text-bone transition-colors">CONTACT</a>
        </div>

        <div className="col-span-6 md:col-span-2 flex flex-col gap-4 text-bone/60">
          <a href="#" className="hover:text-bone transition-colors">SHIPPING</a>
          <a href="#" className="hover:text-bone transition-colors">RETURNS</a>
          <a href="#" className="hover:text-bone transition-colors">TERMS</a>
          <a href="#" className="hover:text-bone transition-colors">PRIVACY</a>
        </div>

        <div className="col-span-12 md:col-span-5 flex flex-col md:items-end justify-end mt-8 md:mt-0 text-bone/40 gap-4">
          <span className="text-precise-micro tracking-precise-loose">POWERED BY ORVIA</span>
          <span>&copy; {new Date().getFullYear()} KHATT. ALL RIGHTS RESERVED.</span>
        </div>
      </div>
      
    </footer>
  );
}
