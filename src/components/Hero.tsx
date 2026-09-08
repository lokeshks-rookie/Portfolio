import React from 'react';
import { HoverText } from './HoverText';

export function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title"><HoverText text="LOKESH. K. S" /></h1>
        <p className="hero-subtitle"><HoverText text="Full-stack Developer" /></p>
      </div>
    </section>
  );
}
