# 04 — Practical Experience

Read `port_brand.md` first. This prompt builds the internship/experience
section. Unlike the two carousel-based sections, this one is explicitly
**not** a 3D scene — it's a lighter DOM card treatment, which keeps the
section cheap to render and gives the visitor a breather between two
heavier WebGL passages (Projects before it, Closing Sequence after it).

## Objective

A title reveal followed by a simple, non-3D card layout showing internship
companies, revealed with a scroll-triggered stagger — no scrub, no
carousel, no ribbon threading.

## Content

- **Section title** (bookmark-wrapped): **"Practical experiences"**
- Cards, count and content placeholder — build data-driven:

  ```ts
  interface Experience {
    company: string;
    role: string;
    duration: string; // e.g. "Jun 2025 – Aug 2025"
    description: string; // one line
    logoUrl?: string;
  }
  ```

  Ship with 2–3 placeholder entries until real internship data is supplied.

## Motion spec

1. Title reveals via `SectionTitle`, same as every other section.
2. Cards animate in with a simple GSAP stagger — fade + slight
   translate-up — triggered once by `ScrollTrigger.batch()` or a plain
   `onEnter` trigger (`scrub: false`). This section should feel calmer and
   more static than the sections around it; resist the urge to add a
   carousel or ribbon here just for consistency's sake — the brief called
   for a "normal card animation" deliberately.
3. Layout: either a static responsive grid or a horizontal scroll-snap
   row — pick whichever reads better once real logos/content exist; both
   are reasonable, and this is genuinely your call rather than something
   with a technically "correct" answer.

## Technical implementation

- Plain Tailwind grid/flex layout, no `<Canvas>` involvement.
- `gsap.utils.toArray('.experience-card')` + `ScrollTrigger.batch(...)` for
  a clean staggered reveal without hand-rolling index-based delays.
- Cards are ordinary React components, not WebGL — this section should be
  the cheapest one on the page to render.

## Component/file suggestions

`ExperienceSection.tsx`, `ExperienceCard.tsx`, `experience.data.ts` (typed
placeholder array), reused `SectionTitle.tsx`.

## Acceptance criteria

- [ ] Title reveals, then cards stagger in on scroll — once, not
      repeatedly re-triggering on every scroll direction change.
- [ ] No 3D canvas is mounted for this section (check dev tools — no extra
      WebGL context here).
- [ ] Layout is responsive down to mobile width without cards overlapping
      or overflowing.
- [ ] Swapping placeholder data for real internship data requires no
      layout code changes.

## Open items

- Real internship/company data not yet provided — company names, roles,
  durations, and descriptions to follow.
- Confirm grid vs. horizontal scroll-snap preference once real content
  (and logo assets, if any) exists — layout choice may depend on how many
  entries there end up being.
