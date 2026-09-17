import React from 'react';

export function Logo({ className = "w-48" }: { className?: string }) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <div className="font-primary text-xl md:text-2xl lg:text-3xl tracking-wide uppercase leading-none text-ink">
        WARAQ & WILLOW
      </div>
      <div className="font-urdu text-lg md:text-xl leading-none text-willow">
        ورق
      </div>
    </div>
  );
}
