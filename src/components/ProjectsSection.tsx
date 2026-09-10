import { useState, useCallback } from 'react';
import { HoverText } from './HoverText';
import GlassCard from './ui/glass-card';
import ProjectDetail from './ProjectDetail';
import { PROJECTS, type ProjectData } from '../data/projects.data';

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [isSliding, setIsSliding] = useState(false);

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
          {/* Heading */}
          <div className="text-center mb-4">
            <h2 className="text-5xl md:text-7xl font-light text-[var(--color-ink-2)] tracking-wide">
              <HoverText text="Projects" />
            </h2>
          </div>

          {/* 3-in-a-row Grid Layout for Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full justify-items-center mb-16">
            {PROJECTS.map((project, idx) => (
              <div key={idx} className="relative z-10">
                <GlassCard
                  title={project.title}
                  description={project.description}
                  link={project.link}
                  githubLink={project.githubLink}
                  onViewMore={() => handleViewMore(project)}
                />
              </div>
            ))}
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
