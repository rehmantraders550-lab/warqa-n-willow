import React from 'react';
import { Leaf } from 'lucide-react';

export function Navigation() {
  return <header className="nav-wrap"><a className="brand-mark" href="#top" aria-label="WARAQ & WILLOW home"><Leaf aria-hidden="true" />WARAQ &amp; WILLOW<small>Letters for a more human world</small></a><nav className="main-nav" aria-label="Primary"><a href="#top">Letters</a><a href="#materials">Materials</a><a href="#house">The House</a><a href="#atelier">Atelier</a></nav><a className="nav-cta" href="#atelier">Begin a letter</a></header>;
}
