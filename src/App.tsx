/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { SmoothScroll } from './components/SmoothScroll';
import { Navigation } from './components/Navigation';
import { Chapter01 } from './components/Chapter01';
import { Chapter02 } from './components/Chapter02';
import { ProductPositioning } from './components/ProductPositioning';
import { Chapter03 } from './components/Chapter03';
import { Chapter04 } from './components/Chapter04';
import { Chapter05 } from './components/Chapter05';
import { Chapter06 } from './components/Chapter06';
import { Chapter07 } from './components/Chapter07';
import { Chapter08 } from './components/Chapter08';
import { Chapter09 } from './components/Chapter09';
import { Chapter10 } from './components/Chapter10';

export default function App() {
  return (
    <SmoothScroll>
      <div className="w-full bg-bone min-h-screen text-true-black overflow-x-hidden selection:bg-true-black selection:text-bone">
        <Navigation />
        <main>
          <Chapter01 />
          <Chapter02 />
          <ProductPositioning />
          <Chapter03 />
          <Chapter04 />
          <Chapter05 />
          <Chapter06 />
          <Chapter07 />
          <Chapter08 />
          <Chapter09 />
        </main>
        <Chapter10 />
      </div>
    </SmoothScroll>
  );
}
