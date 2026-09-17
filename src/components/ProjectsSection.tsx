import { useState, useCallback, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HoverText } from './HoverText';
import GlassCard from './ui/glass-card';
import ProjectDetail from './ProjectDetail';
import { PROJECTS, type ProjectData } from '../data/projects.data';

// Number of columns per row at the lg breakpoint (3-column grid)
const COLS = 3;

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [isSliding, setIsSliding] = useState(false);

  const headingRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true, margin: '-80px' });
  const gridInView = useInView(gridRef, { once: true, margin: '-40px' });

  const handleViewMore = useCallback((project: ProjectData) => {
    setSelectedProject(project);

    // Trigger the slide-in after the component mounts
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setIsSliding(true);
      });
    });

    // Lock body scroll when detail is open
    document.body.style.overflow = 'hidden';
  }, []);

  const handleBack = useCallback(() => {
    // Slide the overlay out
    setIsSliding(false);

    // After the slide-out animation completes, unmount and unlock scroll
    setTimeout(() => {
      setSelectedProject(null);
      document.body.style.overflow = '';
    }, 1000);
  }, []);

  return (
    <>
      <section
        className="min-h-screen pt-32 pb-8 px-4 flex flex-col items-center justify-center relative overflow-hidden"
        style={{ backgroundColor: 'var(--color-base)' }}
      >
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
              <HoverText text="Projects" />
            </h2>
          </motion.div>

          {/* 3-in-a-row Grid Layout for Cards — alternating row burst */}
          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full justify-items-center mb-16">
            {PROJECTS.map((project, idx) => {
              // Determine which row this card belongs to (0-indexed)
              const row = Math.floor(idx / COLS);
              // Even rows burst from left, odd rows burst from right
              const fromLeft = row % 2 === 0;

              return (
                <motion.div
                  key={idx}
                  className="relative z-10"
                  initial={{ x: fromLeft ? -400 : 400, opacity: 0 }}
                  animate={gridInView ? { x: 0, opacity: 1 } : { x: fromLeft ? -400 : 400, opacity: 0 }}
                  transition={{
                    type: 'spring',
                    stiffness: 55,
                    damping: 16,
                    mass: 1,
                    delay: idx * 0.1,
                  }}
                >
                  <GlassCard
                    title={project.title}
                    description={project.description}
                    link={project.link}
                    githubLink={project.githubLink}
                    onViewMore={() => handleViewMore(project)}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Full-screen overlay — slides in from the right */}
      {selectedProject && (
        <ProjectDetail
          project={selectedProject}
          onBack={handleBack}
          visible={isSliding}
        />
      )}
    </>
  );
}
