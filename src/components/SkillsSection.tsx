import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HoverText } from './HoverText';
import { CoverflowCarousel } from './ui/CoverflowCarousel';

import {
  SiPython,
  SiC,
  SiCplusplus,
  SiHtml5,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiMysql,
  SiSqlite
} from 'react-icons/si';

import { FaJava, FaDatabase } from 'react-icons/fa';

const ALL_LANGUAGES = [
  { title: "Python", icon: <SiPython className="w-full h-full" /> },
  { title: "Java", icon: <FaJava className="w-full h-full" /> },
  { title: "C", icon: <SiC className="w-full h-full" /> },
  { title: "C++", icon: <SiCplusplus className="w-full h-full" /> },
  { title: "HTML", icon: <SiHtml5 className="w-full h-full" /> },
  { title: "Tailwind CSS", icon: <SiTailwindcss className="w-full h-full" /> },
  { title: "JavaScript", icon: <SiJavascript className="w-full h-full" /> },
  { title: "TypeScript", icon: <SiTypescript className="w-full h-full" /> },
  { title: "MongoDB", icon: <SiMongodb className="w-full h-full" /> },
  { title: "MySQL", icon: <SiMysql className="w-full h-full" /> },
  { title: "SQLite", icon: <SiSqlite className="w-full h-full" /> },
  { title: "ChromaDB", icon: <FaDatabase className="w-full h-full" /> },
  { title: "DuckDB", icon: <FaDatabase className="w-full h-full" /> },
];

export function SkillsSection() {
  const headingRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true, margin: '-80px' });
  const carouselInView = useInView(carouselRef, { once: true, margin: '-60px' });

  return (
    <section
      id="skills"
      className="px-4 flex flex-col items-center justify-center relative overflow-hidden"
      style={{
        backgroundColor: 'var(--color-base)',
        minHeight: '140vh',
        paddingTop: '10rem',
        paddingBottom: '10rem',
      }}
    >
      {/* Ensure HoverText works by marking this as dom-interactive since it's a new section */}
      <div className="dom-interactive w-full max-w-7xl mx-auto flex flex-col gap-20 z-10">

        {/* Large text heading with fade-in + hover effect */}
        <motion.div
          ref={headingRef}
          className="text-center mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={headingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <h2 className="text-5xl md:text-7xl font-light text-[var(--color-ink-2)] tracking-wide">
            <HoverText text="Programming Languages expertise" />
          </h2>
        </motion.div>

        {/* Unified Carousel — burst from left, then continue autoplay */}
        <motion.div
          ref={carouselRef}
          className="flex flex-col items-center gap-8 w-full"
          style={{ minHeight: '520px' }}
          initial={{ x: 600, opacity: 0 }}
          animate={carouselInView ? { x: 0, opacity: 1 } : { x: 600, opacity: 0 }}
          transition={{
            type: 'spring',
            stiffness: 50,
            damping: 16,
            mass: 1.2,
            delay: 0.3,
          }}
        >
          <CoverflowCarousel
            slides={ALL_LANGUAGES}
            loop={true}
            autoplay={true}
            rotate={50}
            depth={0.65}
            perspective={3.2}
            cardWidth="clamp(180px, 26vw, 320px)"
            gap={0.08}
          />
        </motion.div>

      </div>
    </section>
  );
}

