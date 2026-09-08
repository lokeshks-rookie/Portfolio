# port_brand.md — Design System Reference

Read this file before implementing any of the six feature prompts (`01`–`06`).
Every prompt below assumes this palette, this type system, and this stack.
Do not introduce a second font, a second animation library, or off-palette
colors anywhere in the build — consistency across sections is the entire
point of this site.

---

## 1. Color palette (roles, not just hex)

| Hex       | Role                                   | Usage                                                                 |
|-----------|-----------------------------------------|------------------------------------------------------------------------|
| `#FCEBCE` | Base / surface                         | Dominant background across every section — warm parchment, not white  |
| `#652301` | Primary ink                            | Body copy, high-contrast text against the base                        |
| `#7E3909` | Secondary ink / headings               | Section titles, subheadings                                           |
| `#AA6729` | Primary accent                         | The bookmark ribbon itself, links, active states                      |
| `#C58B53` | Secondary accent                       | Hover states, card borders, secondary UI elements                     |
| `#652E05` | Deep accent                            | Shadows, dividers, book cover base color, pressed states              |

Set these as CSS custom properties at the root (`--color-base`, `--color-ink`,
`--color-ink-2`, `--color-accent`, `--color-accent-2`, `--color-deep`) and
extend Tailwind's theme from those variables — never hardcode the hex values
inside components.

## 2. Typography

- **Font:** Josefin Sans (Google Fonts), loaded via `@fontsource/josefin-sans`
  or a `<link>` — no fallback web-safe font should ever be visibly used.
- **Weights:** 200–600 only. Do **not** use 700 (bold) anywhere — it breaks
  the thin, elegant read the whole brief is built around.
- **Hero / opening text:** mid-thin weight (300), large — `clamp(3rem, 8vw, 7rem)`.
- **Section titles ("Programming Languages expertise", "Projects that I've
  done", etc.):** weight 300–400, `clamp(2rem, 5vw, 4rem)`.
- **Body copy (bio, card descriptions):** weight 400, `1rem`–`1.25rem`,
  line-height ≥ 1.6 for readability against the busy background.
- Slightly increase letter-spacing on headings (`0.02em`–`0.04em`) to
  reinforce the thin, elongated feel of Josefin Sans at large sizes.

## 3. Motion principles (apply everywhere)

- **Scroll drives everything.** No autoplaying animation carries the primary
  narrative. GSAP `ScrollTrigger` with `scrub: true` is the default; use
  `onEnter`/`onLeave` triggers only for the lighter, non-3D sections
  (Practical Experience, Footer).
- **Lenis** wraps the entire app root for inertia scrolling — GSAP's
  ScrollTrigger must be told to update on Lenis's `scroll` event, not the
  native scroll event.
- **One ribbon, one identity.** The bookmark lace is a single conceptual
  object (built with the `meshline` package) that recurs across every
  section — hero wrap, book spine, carousel pole, project-card thread,
  closing knot. Don't rebuild it per-section with different geometry; reuse
  one `Ribbon` component and re-target its curve.
- **Real content stays real.** Any text a visitor needs to read closely, and
  every link (GitHub, project URLs, social, contact), is a real DOM element
  — HTML text or an anchor tag — positioned over or beside the WebGL canvas
  (`@react-three/drei`'s `<Html>` or manual screen-space projection). Nothing
  load-bearing gets baked into a canvas texture. This matters for
  accessibility, SEO, and copy-paste — a portfolio nobody's screen reader
  can parse and nothing can crawl defeats its own purpose.
- **Degrade gracefully.** Respect `prefers-reduced-motion`. Have a plan for
  low-end/mobile devices — either a lighter fallback path or, at minimum, a
  frame-rate cap and reduced particle/card counts. Test on a mid-range
  Android phone before calling any section done, not just a laptop.

## 4. Tech stack (fixed across all files)

- React + TypeScript + Vite
- Tailwind CSS (palette + font wired into `tailwind.config`)
- `three`, `@react-three/fiber`, `@react-three/drei`
- `gsap` + `gsap/ScrollTrigger` (free, all plugins included)
- `lenis` (smooth scroll — package is `lenis`, not the deprecated
  `@studio-freight/lenis`)
- `meshline` (the ribbon geometry)

## 5. Shared components to build once, reuse everywhere

- `Ribbon.tsx` — the meshline lace, takes a curve (array of points) and
  renders it. Every section that needs the ribbon imports this and supplies
  its own control points.
- `Book.tsx` / `BookPage.tsx` — procedural book: a box for the cover, a
  stack of thin planes for pages, each independently hinge-rotatable. Used
  in both the opening sequence (full open/close) and the closing sequence
  (cover-only, never opens).
- `SectionTitle.tsx` — the "text wrapped in a bookmark lace" treatment used
  for every section header throughout the site (hero line, "Programming
  Languages expertise", "Problem solving", "Web Programming", "Database",
  "Projects that I've done", "Practical experiences").
- `ScrollCanvas.tsx` — the single fixed full-viewport `<Canvas>` that every
  3D section renders into, with the DOM sections stacked in normal flow
  beneath it purely to generate scroll distance.

## 6. Open items to resolve before this ships (cross-cutting)

- The intro bio text says "pursuing Computer Science"; confirm this against
  actual enrollment (ECE vs CS) before it goes live — see `01-opening-
  sequence.md`.
- Language/tool icons for the three carousels aren't sourced yet — decide
  between an icon library (e.g. Devicon, Simple Icons) or custom flat marks
  that match the palette.
- Project data (six entries), internship data, and hobbies/social links are
  all placeholders in their respective files — the components should be
  built data-driven (typed arrays) so real content drops in without
  touching layout code.
