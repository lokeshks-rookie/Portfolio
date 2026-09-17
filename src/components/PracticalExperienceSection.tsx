import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HoverText } from './HoverText';
import marlionLogo from '../public/Screenshot 2026-09-07 134719.png';
import { TiltCard } from './ui/tilt-card';
import { ExternalLink, MapPin } from 'lucide-react';

// Website URL placeholder - update this when you have the final URL
const COMPANY_WEBSITE_URL = 'https://www.marliontech.com';

// Google Maps search URL for Marlion Technologies location
const COMPANY_MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=Marlion+Technologies';

export function PracticalExperienceSection() {
  const headingRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true, margin: '-80px' });
  const contentInView = useInView(contentRef, { once: true, margin: '-60px' });

  return (
    <section className="min-h-screen pt-12 pb-32 px-4 flex flex-col items-center justify-center relative overflow-hidden" style={{ backgroundColor: 'var(--color-base)' }}>
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-12 z-10">

        {/* Heading — fade in */}
        <motion.div
          ref={headingRef}
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={headingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <h2 className="text-5xl md:text-7xl font-light text-[var(--color-ink-2)] tracking-wide">
            <HoverText text="Industrial Exposure" />
          </h2>
        </motion.div>
        <br></br>

        {/* Content — fade in one by one */}
        <div ref={contentRef} className="w-full flex items-center justify-center px-4">
          <div className="w-full max-w-5xl flex flex-col md:flex-row items-center md:items-start gap-12 py-8">
            {/* Logo side — fade in first */}
            <motion.div
              className="w-full md:w-1/3 flex justify-center items-center shrink-0"
              initial={{ opacity: 0, y: 40 }}
              animate={contentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            >
              <TiltCard effect="evade" scale={1.05} tiltLimit={20}>
                <img
                  src={marlionLogo}
                  alt="Marlion Technologies Logo"
                  className="w-56 h-auto object-contain rounded-2xl drop-shadow-md bg-white/30 p-2"
                />
              </TiltCard>
            </motion.div>
            {/* Text side — fade in sequentially */}
            <div className="w-full md:w-2/3 flex flex-col justify-center text-[var(--color-ink)]">
              <motion.div
                className="flex items-center flex-wrap mb-6"
                style={{ gap: '30px' }}
                initial={{ opacity: 0, y: 30 }}
                animate={contentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
              >
                <h3 className="text-4xl font-bold">Marlion Technologies</h3>

                {/* Action Icons (30px gap from company name) */}
                <div className="flex items-center gap-3.5">
                  {/* Website Link (ExternalLink Icon) */}
                  <a
                    href={COMPANY_WEBSITE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center justify-center transition-colors duration-200"
                    style={{ color: 'var(--color-ink)' }}
                    aria-label="Visit Company Website"
                    id="experience-navigation-icon"
                  >
                    <ExternalLink size={16} color="var(--color-ink)" className="transition-transform duration-200 group-hover:scale-110" />
                    <span className="absolute left-1/2 -translate-x-1/2 -bottom-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none text-xs whitespace-nowrap" style={{ color: 'var(--color-ink)' }}>
                      Visit Website
                    </span>
                  </a>

                  {/* Google Maps Location Link (MapPin Icon) */}
                  <a
                    href={COMPANY_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center justify-center transition-colors duration-200"
                    style={{ color: 'var(--color-ink)' }}
                    aria-label="View Location on Google Maps"
                    id="experience-map-icon"
                  >
                    <MapPin size={16} color="var(--color-ink)" className="transition-transform duration-200 group-hover:scale-110" />
                    <span className="absolute left-1/2 -translate-x-1/2 -bottom-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none text-xs whitespace-nowrap" style={{ color: 'var(--color-ink)' }}>
                      Google Maps
                    </span>
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={contentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.75 }}
              >
                <h4 className="text-2xl font-bold mb-4 text-[var(--color-ink-2)]">Position : Team-Lead</h4>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={contentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 1.0 }}
              >
                <p className="text-md font-semibold text-[var(--color-accent)] mt-1">June 2026 – July 2026</p>
              </motion.div>

              <motion.ul
                className="list-disc list-inside space-y-3 text-lg leading-relaxed opacity-90"
                initial={{ opacity: 0, y: 25 }}
                animate={contentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 1.25 }}
              >
                <br></br>
                <li>Led a two-person team to create a Campus Lost and Found App with MERN stack and Deployed it in Server.</li>
                <li>Learnt about various open source providers and implemented them in our project.</li>
              </motion.ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
