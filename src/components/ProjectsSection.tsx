import React from 'react';
import { HoverText } from './HoverText';
import GlassCard from './ui/glass-card';

const PROJECTS = [
  {
    title: "Skadoosh",
    description: "A Reddit-style scam awareness and reporting platform crowdsourcing fraud alerts across web and mobile.",
    link: "#",
  },
  {
    title: "NOVA",
    description: "A campus lost-and-found platform, MERN-built, that placed first in a college competition and is actively used by around 100 people.",
    link: "#",
  },
  {
    title: "Healix (IRIS)",
    description: "An AI-driven healthcare chatbot connecting patients with care providers through guided, model-backed support.",
    link: "#",
  },
  {
    title: "LAURA-ANIDS",
    description: "An agentic network intrusion detection system giving SOC-less startups real-time, explainable threat detection.",
    link: "#",
  },
  {
    title: "Buggy",
    description: "A Community Platform designed for developers to solve and learn real-time bugs occuring in dynamic environment.",
    link: "#",
  },
  {
    title: "Smart Queue system",
    description: "An intelligent queue management system that streamlines customer flow, reduces waiting time, and provides real-time queue status and updates.",
    link: "#",
  },
];

export function ProjectsSection() {
  return (
    <section className="min-h-screen pt-32 pb-8 px-4 flex flex-col items-center justify-center relative overflow-hidden" style={{ backgroundColor: 'var(--color-base)' }}>
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
            <div
              key={idx}
              className="relative z-10"
            >
              <GlassCard
                title={project.title}
                description={project.description}
                link={project.link}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
