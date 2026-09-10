import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowLeft, Users, Wrench, Cpu, ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import ImageStack from './ui/ImageStack';
import type { ProjectData } from '../data/projects.data';

interface ProjectDetailProps {
  project: ProjectData;
  onBack: () => void;
  visible: boolean;
}

const sectionVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export default function ProjectDetail({ project, onBack, visible }: ProjectDetailProps) {
  return (
    <div
      className={`project-detail-overlay ${visible ? 'project-detail-overlay--active' : ''}`}
    >
      <div 
        className="project-detail-scroll-container"
        data-lenis-prevent="true"
        onWheel={(e) => e.stopPropagation()}
        onTouchMove={(e) => e.stopPropagation()}
      >
        <div className="project-detail-view">
          {/* Back Button */}
          <motion.button
            className="project-detail-back-btn"
            onClick={onBack}
            initial={{ opacity: 0, x: -20 }}
            animate={visible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft size={20} />
            <span>Back</span>
          </motion.button>

          <div className="project-detail-layout">
            {/* Left 40% — Image Stack */}
            <motion.div
              className="project-detail-images"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={visible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <ImageStack images={project.images} />
            </motion.div>

            {/* Right 60% — Project Info */}
            <div className="project-detail-content">
              {/* Title */}
              <motion.h1
                className="project-detail-title"
                custom={0}
                initial="hidden"
                animate={visible ? 'visible' : 'hidden'}
                variants={sectionVariants}
              >
                {project.title}
              </motion.h1>

              {/* Links */}
              <motion.div
                className="project-detail-links"
                custom={1}
                initial="hidden"
                animate={visible ? 'visible' : 'hidden'}
                variants={sectionVariants}
              >
                {project.link && project.link !== '#' && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="project-detail-link-btn"
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                )}
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="project-detail-link-btn project-detail-link-btn--github"
                >
                  <FaGithub size={14} />
                  GitHub
                </a>
              </motion.div>

              {/* Abstract */}
              <motion.div
                className="project-detail-section"
                custom={2}
                initial="hidden"
                animate={visible ? 'visible' : 'hidden'}
                variants={sectionVariants}
              >
                <h3 className="project-detail-section-title">Abstract</h3>
                <p className="project-detail-section-text">{project.abstract}</p>
              </motion.div>

              {/* Objective */}
              <motion.div
                className="project-detail-section"
                custom={3}
                initial="hidden"
                animate={visible ? 'visible' : 'hidden'}
                variants={sectionVariants}
              >
                <h3 className="project-detail-section-title">Objective</h3>
                <p className="project-detail-section-text">{project.objective}</p>
              </motion.div>

              {/* Solution */}
              <motion.div
                className="project-detail-section"
                custom={4}
                initial="hidden"
                animate={visible ? 'visible' : 'hidden'}
                variants={sectionVariants}
              >
                <h3 className="project-detail-section-title">Solution</h3>
                <p className="project-detail-section-text">{project.solution}</p>
              </motion.div>

              {/* Tech Stack */}
              <motion.div
                className="project-detail-section"
                custom={5}
                initial="hidden"
                animate={visible ? 'visible' : 'hidden'}
                variants={sectionVariants}
              >
                <h3 className="project-detail-section-title">
                  <Cpu size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '6px' }} />
                  Tech Stack Used
                </h3>
                <div className="project-detail-tags">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="project-detail-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Tools & LLMs */}
              <motion.div
                className="project-detail-section"
                custom={6}
                initial="hidden"
                animate={visible ? 'visible' : 'hidden'}
                variants={sectionVariants}
              >
                <h3 className="project-detail-section-title">
                  <Wrench size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '6px' }} />
                  Tools & LLMs Used
                </h3>
                <div className="project-detail-tags">
                  {project.toolsAndLLMs.map((tool) => (
                    <span key={tool} className="project-detail-tag project-detail-tag--tool">
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Collaborators */}
              <motion.div
                className="project-detail-section"
                custom={7}
                initial="hidden"
                animate={visible ? 'visible' : 'hidden'}
                variants={sectionVariants}
              >
                <h3 className="project-detail-section-title">
                  <Users size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '6px' }} />
                  Collaborators
                </h3>
                <div className="project-detail-collaborators">
                  {project.collaborators.map((name) => (
                    <div key={name} className="project-detail-collaborator">
                      <div className="project-detail-collaborator-avatar">
                        {name.charAt(0)}
                      </div>
                      <span>{name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
