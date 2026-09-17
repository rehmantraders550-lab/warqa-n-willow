import React from 'react';

const navItems = [
  ['Truth', '#truth'],
  ['Reasons', '#reasons'],
  ['Atelier', '#atelier'],
  ['Paper', '#materials'],
  ['Making', '#making'],
  ['Begin', '#begin'],
];

export function Navigation() {
  return (
    <header className="nav-wrap">
      <a className="brand-mark" href="#top" aria-label="WARAQ & WILLOW home">
        WARAQ & WILLOW
      </a>
      <nav className="main-nav" aria-label="Primary">
        {navItems.map(([label, href]) => (
          <a href={href} key={href}>
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}
