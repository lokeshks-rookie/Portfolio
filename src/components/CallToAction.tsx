import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HoverText } from './HoverText';

export function CallToAction() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-100px' });

  // Split the sentence into words for staggered animation
  const words = ['Got', 'any', 'work?', 'Give', 'me', 'a', 'call', '.', '.', '.'];

  return (
    <section
      className="flex flex-col items-center justify-center relative overflow-hidden"
      style={{
        backgroundColor: 'var(--color-base)',
        minHeight: '80vh',
        paddingTop: '12rem',
        paddingBottom: '12rem',
      }}
    >
      <div ref={sectionRef} className="w-full max-w-6xl mx-auto px-6 flex items-center justify-center">
        <h2
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-wide text-center leading-tight"
          style={{ color: 'var(--color-ink-2)' }}
        >
          {words.map((word, idx) => (
            <motion.span
              key={idx}
              className="inline-block"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{
                duration: 0.5,
                ease: 'easeOut',
                delay: idx * 0.12,
              }}
            >
              {/* Only add space after real words, not the trailing dots */}
              <span className="dom-interactive">
                <HoverText text={word} />
              </span>
              {/* Add space between words but not between the trailing dots */}
              {idx < 6 && '\u00A0'}
            </motion.span>
          ))}
        </h2>
      </div>
    </section>
  );
}
