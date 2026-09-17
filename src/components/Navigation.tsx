import React from 'react';

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference text-bone px-4 py-6 md:px-8 flex justify-between items-start pointer-events-none">
      {/* Mix-blend-difference allows the nav to be visible over both light and dark backgrounds */}
      
      {/* Mobile Nav */}
      <div className="md:hidden flex w-full justify-between items-baseline pointer-events-auto text-precise-meta tracking-precise-loose uppercase">
        <a href="#" className="hover:opacity-60 transition-opacity">KHATT</a>
        <a href="#" className="hover:opacity-60 transition-opacity">INDEX</a>
        <a href="#" className="hover:opacity-60 transition-opacity">BAG 0</a>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex w-full justify-between items-baseline pointer-events-auto text-precise-meta tracking-precise-loose uppercase font-medium">
        <div className="flex gap-12 lg:gap-24">
          <a href="#" className="hover:opacity-60 transition-opacity">KHATT</a>
          <div className="flex gap-8 lg:gap-16">
            <a href="#" className="hover:opacity-60 transition-opacity">OBJECTS</a>
            <a href="#" className="hover:opacity-60 transition-opacity">MATERIAL</a>
            <a href="#" className="hover:opacity-60 transition-opacity">JOURNAL</a>
          </div>
        </div>
        
        <div className="flex gap-8 lg:gap-16">
          <a href="#" className="hover:opacity-60 transition-opacity">INDEX</a>
          <a href="#" className="hover:opacity-60 transition-opacity">BAG 0</a>
        </div>
      </div>
    </nav>
  );
}
