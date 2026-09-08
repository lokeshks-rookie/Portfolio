import { useRef, useEffect, useState } from 'react';
import { footerData } from '../data/footer.data';
import { ExternalLink, Send } from 'lucide-react';

// Brand icons as simple SVG marks (lucide-react doesn't include brand icons)
const GitHubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const TwitterXIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
);

const ICON_MAP: Record<string, React.ReactNode> = {
  github: <GitHubIcon />,
  linkedin: <LinkedInIcon />,
  twitter: <TwitterXIcon />,
  instagram: <InstagramIcon />,
};

type FormStatus = 'idle' | 'sending' | 'sent' | 'error';

function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      // Replace YOUR_FORM_ID with your actual Formspree form ID
      const res = await fetch('https://formspree.io/f/xgaepkjo', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('sent');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="contact-form" aria-label="Contact form">
      <input
        type="text"
        name="name"
        placeholder="Your name"
        required
        id="contact-name"
        aria-label="Your name"
      />
      <input
        type="email"
        name="email"
        placeholder="Your email"
        required
        id="contact-email-input"
        aria-label="Your email address"
      />
      <textarea
        name="message"
        placeholder="Your message"
        rows={4}
        required
        id="contact-message"
        aria-label="Your message"
      />
      <button
        type="submit"
        id="contact-submit"
        disabled={status === 'sending' || status === 'sent'}
        className="flex items-center justify-centre gap-7 w-full"
      >
        {status === 'idle' && (
          <>
            <Send size={13} />
            <span>Send Message</span>
          </>
        )}
        {status === 'sending' && <span className="mx-auto">Sending...</span>}
        {status === 'sent' && <span className="mx-auto">✓ Message sent!</span>}
        {status === 'error' && <span className="mx-auto">Something went wrong — try again</span>}
      </button>
      {status === 'sent' && (
        <p style={{ fontSize: '0.8rem', color: 'var(--color-base)', textAlign: 'center' }}>
          Thanks! I'll get back to you soon.
        </p>
      )}
    </form>
  );
}

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Subtle fade in on mount (no GSAP needed here)
    const el = footerRef.current;
    if (!el) return;
    el.style.opacity = '0';
    const timer = setTimeout(() => {
      el.style.transition = 'opacity 0.8s ease';
      el.style.opacity = '1';
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <footer ref={footerRef} className="footer dom-interactive" id="footer" aria-label="Footer">
      <div className="footer-grid">
        {/* Social links */}
        <div className="footer-section">
          <h3>Connect</h3>
          <div className="footer-socials">
            {footerData.socials.map((s) => (
              <a
                key={s.platform}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label={`${s.platform} profile`}
                id={`social-${s.platform.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {ICON_MAP[s.icon] ?? null}
                {s.platform}
              </a>
            ))}
          </div>
        </div>

        {/* Contact form */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p className="contact-email" style={{ marginBottom: '1rem' }}>
            Or email directly:{' '}
            <a href={`mailto:${footerData.contactEmail}`} id="contact-email-link">
              {footerData.contactEmail}
            </a>
          </p>
          <ContactForm />
        </div>

        {/* Right Column: Hobbies & Other Platforms */}
        <div className="footer-section flex flex-col gap-10">
          <div>
            <a href="#" className="group inline-flex items-center gap-2 decoration-transparent">
              <h3 className="group-hover:text-[var(--color-accent)] transition-colors cursor-pointer !mb-0">
                Hobbies
              </h3>
              <ExternalLink size={14} className="text-[var(--color-base)]/60 group-hover:text-[var(--color-base)] transition-colors -mt-0.5" />
            </a>
          </div>

          <div>
            <h3>Other Platforms</h3>
            <div className="footer-socials">
              <a
                href="https://leetcode.com/u/lokeshks/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                LeetCode
              </a>
              <a
                href="https://www.hackerrank.com/profile/luckylokesh1296"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                HackerRank
              </a>
            </div>
          </div>
        </div>
      </div>

      <p className="footer-bottom">
        © {new Date().getFullYear()} K.S. Lokesh — Built with passion, not templates.
      </p>
    </footer>
  );
}
