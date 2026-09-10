import { useEffect, useRef } from 'react';
import { Hero } from './components/Hero';
import { Bio } from './components/Bio';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CertificationsSection } from './components/CertificationsSection';
import { PracticalExperienceSection } from './components/PracticalExperienceSection';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLenis } from './hooks/useLenis';
import { Footer } from './components/Footer';
import './index.css';

gsap.registerPlugin(ScrollTrigger);

function LoadingScreen({ onDone }: { onDone: () => void }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (ref.current) {
        ref.current.classList.add('fade-out');
        setTimeout(onDone, 800);
      }
    }, 1200);
    return () => clearTimeout(timer);
  }, [onDone]);

  return (
    <div ref={ref} className="loading-screen" aria-label="Loading portfolio" role="status">
      <p className="loading-text" aria-live="polite">Loading the story ...</p>
    </div>
  );
}

export default function App() {
  // Initialize Lenis smooth scroll
  useLenis();

  const contentRef = useRef<HTMLDivElement>(null);
  const loaded = useRef(false);

  const handleLoaded = () => {
    loaded.current = true;
    if (contentRef.current) {
      gsap.to(contentRef.current, { opacity: 1, duration: 0.6, ease: 'power2.out' });
    }
  };

  return (
    <>
      <LoadingScreen onDone={handleLoaded} />

      {/* All content */}
      <div
        ref={contentRef}
        id="content"
        style={{ opacity: 0, position: 'relative', zIndex: 1, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
      >

        {/* Main content area will go here */}
        <main className="dom-interactive" style={{ flexGrow: 1 }}>
          <Hero />
          <Bio />
          <SkillsSection />
          <ProjectsSection />
          <CertificationsSection />
          <PracticalExperienceSection />
        </main>

        {/* ── Footer: socials, contact, hobbies ── */}
        <div className="dom-interactive" style={{ position: 'relative', zIndex: 5, marginTop: 'auto' }}>
          <Footer />
        </div>
      </div>
    </>
  );
}
