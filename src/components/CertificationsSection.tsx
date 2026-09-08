import React from 'react';
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
  return (
    <section className="min-h-screen pt-32 pb-8 px-4 flex flex-col items-center justify-center relative overflow-hidden" style={{ backgroundColor: 'var(--color-base)' }}>
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-24 z-10">

        {/* Heading */}
        <div className="text-center mb-4">
          <h2 className="text-5xl md:text-7xl font-light text-[var(--color-ink-2)] tracking-wide">
            <HoverText text="Certifications" />
          </h2>
        </div>

        {/* Certifications Layout - Centered */}
        <div className="flex flex-wrap justify-center items-center gap-8 w-full mb-16">
          {CERTIFICATIONS.map((cert, idx) => (
            <TiltCard
              key={idx}
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
          ))}
        </div>
      </div>
    </section>
  );
}
