import React, { useState, useEffect, useRef } from 'react';
import { HoverText } from './HoverText';
import profileImg from '../public/finport.png';

const fullText = "Heya !, This is K.S.Lokesh , right now I'm an undergrad student pursuing Computer Science in Thiagarajar College of Engineering , Madurai . I'm aspiring to be become a well established Developer in all of my Interested fields like Software , Cloud , Networks and Security , AI-ML and this list moves further as I experience a lot of new concepts in Life . So to put it in a nutshell , I'm a man who does work in a way that people would be immersed and impressed to look at . And so in this journey nice to meet ya !";

export function Bio() {
  const [displayedText, setDisplayedText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Trigger only once
        }
      },
      { threshold: 0.5 } // trigger when 50% visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let index = 0;
    const intervalId = setInterval(() => {
      setDisplayedText(fullText.substring(0, index + 1));
      index++;
      if (index === fullText.length) {
        clearInterval(intervalId);
        setIsCompleted(true);
      }
    }, 15); // Adjust typing speed here

    return () => clearInterval(intervalId);
  }, [isVisible]);

  return (
    <section className="bio-section" ref={sectionRef}>
      <div className="bio-container">
        <div className="bio-image-placeholder" style={{ padding: 0, overflow: 'hidden', border: '2px solid var(--color-accent)' }}>
          <img src={profileImg} alt="K.S. Lokesh" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div className="bio-text" style={{ position: 'relative' }}>
          {/* Invisible text to reserve exact space */}
          <p style={{ visibility: 'hidden', margin: 0 }}>
            <HoverText text={fullText} />
          </p>
          {/* Absolutely positioned typing text */}
          <p style={{ position: 'absolute', top: 0, left: 0, margin: 0 }}>
            <HoverText text={displayedText} />
            {!isCompleted && <span className="blinking-cursor">|</span>}
          </p>
        </div>
      </div>
    </section>
  );
}
