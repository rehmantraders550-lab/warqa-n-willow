import React, { useState } from 'react';
import { FadeIn } from './FadeIn';
import { motion, AnimatePresence } from 'motion/react';
import { motionTokens } from '../lib/motion';

const OBJECTS = [
  {
    id: 'G-01',
    name: 'DOUBLE WALL GLASS',
    volume: '250 ML',
    image: 'https://images.unsplash.com/photo-1577979749830-f1d742b96791?q=80&w=1500&auto=format&fit=crop'
  },
  {
    id: 'G-02',
    name: 'TUMBLER',
    volume: '320 ML',
    image: 'https://images.unsplash.com/photo-1584988755018-b2de9f0c2356?q=80&w=1500&auto=format&fit=crop'
  },
  {
    id: 'G-03',
    name: 'CARAFE',
    volume: '750 ML',
    image: 'https://images.unsplash.com/photo-1579705745131-c852445c7b39?q=80&w=1500&auto=format&fit=crop'
  },
  {
    id: 'C-01',
    name: 'STONEWARE CUP',
    volume: '220 ML',
    image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=1500&auto=format&fit=crop'
  }
];

export function Chapter04() {
  const [activeImage, setActiveImage] = useState(OBJECTS[0].image);

  return (
    <section className="relative w-full py-24 md:py-32 px-4 md:px-8 border-t border-true-black/10">
      <div className="grid grid-cols-12 gap-4 w-full">
        
        {/* Index List */}
        <div className="col-span-12 md:col-span-5 lg:col-span-4 flex flex-col justify-center order-2 md:order-1 pt-12 md:pt-0">
          <div className="text-precise-meta tracking-precise-loose font-medium uppercase mb-12 text-slate">
            INDEX
          </div>
          <ul className="flex flex-col">
            {OBJECTS.map((obj) => (
              <li 
                key={obj.id}
                className="group border-b border-true-black/10 last:border-0"
                onMouseEnter={() => setActiveImage(obj.image)}
              >
                <a href={`#${obj.id}`} className="py-6 md:py-8 flex justify-between items-baseline group-hover:opacity-50 transition-opacity">
                  <div className="flex flex-col gap-1">
                    <span className="text-precise-meta tracking-precise text-true-black/50">{obj.id}</span>
                    <span className="text-precise-body tracking-precise uppercase font-medium">{obj.name}</span>
                  </div>
                  <span className="text-precise-meta tracking-precise text-true-black/50">{obj.volume}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Persistent Image Viewport */}
        <div className="col-span-12 md:col-span-7 lg:col-span-7 md:col-start-6 lg:col-start-6 order-1 md:order-2">
          <FadeIn duration={1.2}>
            <div className="aspect-[4/5] md:aspect-[3/4] lg:aspect-square bg-[#e8e8e6] w-full overflow-hidden relative">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={activeImage}
                  src={activeImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: motionTokens.normal, ease: motionTokens.ease }}
                  alt="Object" 
                  className="absolute inset-0 w-full h-full object-cover object-center mix-blend-multiply opacity-90"
                />
              </AnimatePresence>
            </div>
          </FadeIn>
        </div>
        
      </div>
    </section>
  );
}
