import React from 'react';
import { HoverText } from './HoverText';
import marlionLogo from '../public/Screenshot 2026-09-07 134719.png';
import { TiltCard } from './ui/tilt-card';


export function PracticalExperienceSection() {
  return (
    <section className="min-h-screen pt-12 pb-32 px-4 flex flex-col items-center justify-center relative overflow-hidden" style={{ backgroundColor: 'var(--color-base)' }}>
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-12 z-10">

        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-5xl md:text-7xl font-light text-[var(--color-ink-2)] tracking-wide">
            <HoverText text="Industrial Exposure" />
          </h2>
        </div>
        <br></br>

        {/* Content - Directly on base */}
        <div className="w-full flex items-center justify-center px-4">
          <div className="w-full max-w-5xl flex flex-col md:flex-row items-center md:items-start gap-12 py-8">
            {/* Logo side */}
            <div className="w-full md:w-1/3 flex justify-center items-center shrink-0">
              <TiltCard effect="evade" scale={1.05} tiltLimit={20}>
                <img
                  src={marlionLogo}
                  alt="Marlion Technologies Logo"
                  className="w-56 h-auto object-contain rounded-2xl drop-shadow-md bg-white/30 p-2"
                />
              </TiltCard>
            </div>
            {/* Text side */}
            <div className="w-full md:w-2/3 flex flex-col justify-center text-[var(--color-ink)]">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-2">
                <h3 className="text-4xl font-bold">Marlion Technologies</h3>
              </div>

              <h4 className="text-2xl font-bold mb-4 text-[var(--color-ink-2)]">Position : Team-Lead</h4>
              <p className="text-md font-semibold text-[var(--color-accent)] mt-1">June 2026 – July 2026</p>

              <ul className="list-disc list-inside space-y-3 text-lg leading-relaxed opacity-90">
                <br></br>
                <li>Led a two-person team to create a Campus Lost and Found App with MERN stack and Deployed it in Server.</li>
                <li>Learnt about various open source providers and implemented them in our project.</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
