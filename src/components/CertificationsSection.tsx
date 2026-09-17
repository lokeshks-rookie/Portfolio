import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HoverText } from './HoverText';
import { TiltCard } from './ui/tilt-card';
import { ExternalLink } from 'lucide-react';

const CERTIFICATIONS = [
  {
    title: "Responsible and Safe AI systems",
    provider: "NPTEL",
    date: "2025",
    link: "#",
  }
];

export function CertificationsSection() {
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true, margin: '-80px' });
  const cardsInView = useInView(cardsRef, { once: true, margin: '-60px' });

  return (
    <section className="min-h-screen pt-32 pb-8 px-4 flex flex-col items-center justify-center relative overflow-hidden" style={{ backgroundColor: 'var(--color-base)' }}>
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-24 z-10">

        {/* Heading — fade in */}
        <motion.div
          ref={headingRef}
          className="text-center mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={headingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <h2 className="text-5xl md:text-7xl font-light text-[var(--color-ink-2)] tracking-wide">
            <HoverText text="Certifications" />
          </h2>
        </motion.div>

        {/* Certifications Layout - Fade in one by one */}
        <div ref={cardsRef} className="flex flex-wrap justify-center items-center gap-8 w-full mb-16">
          {CERTIFICATIONS.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={cardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{
                duration: 0.7,
                ease: 'easeOut',
                delay: idx * 0.25,
              }}
            >
              <TiltCard
                className="w-full sm:w-[340px] max-w-[340px] rounded-[24px] border border-[var(--color-accent)]/30 bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-ink)] shadow-[0_8px_30px_rgba(101,35,1,0.12)] transition-all duration-300 group hover:shadow-[0_8px_30px_rgba(170,103,41,0.3)] min-h-[200px] flex flex-col"
                scale={1.05}
                tiltLimit={15}
              >
                <div className="flex flex-col h-full w-full p-8 gap-3 relative z-20 flex-grow">
                  {/* Header (Icon + Date) */}
                  <div className="flex items-start justify-end mb-2">
                    {cert.date && (
                      <span className="text-[10px] font-bold !text-[var(--color-base)] tracking-wider uppercase bg-[var(--color-base)]/10 group-hover:bg-[var(--color-base)]/20 transition-colors duration-300 px-2.5 py-1 rounded-full -translate-x-[9px] translate-y-[10px]">
                        {cert.date}
                      </span>
                    )}
                  </div>

                  {/* Body (Title + Provider) */}
                  <div className="flex flex-col gap-1.5 flex-grow translate-x-[13px] translate-y-[8px]">
                    <h3 className="text-base md:text-[17px] font-bold !text-[var(--color-base)] group-hover:!text-white transition-colors duration-300 leading-snug">
                      {cert.title}
                    </h3>
                    <p className="text-xs !text-[var(--color-base)] font-semibold uppercase tracking-wider opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                      {cert.provider}
                    </p>
                  </div>

                  {/* Footer (View Details - Bottom Right) */}
                  <div className="flex justify-end mt-2 -translate-y-[7px] -translate-x-[7px]">
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-xs font-bold !text-[var(--color-base)] group-hover:!text-white transition-all duration-300 hover:translate-x-1"
                    >
                      View details
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
