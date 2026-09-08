# 03 — Projects Showcase

Read `port_brand.md` first. This prompt builds the projects section: one
title, then six cards threaded on the ribbon, each passing through a
grommet-style hole as the user scrolls — the section closest to the
`projects.png` reference composition.

## Objective

Six project cards, strung on the same ribbon used throughout the site,
entering and settling one after another as the user scrolls, each carrying
real, clickable links.

## Content

- **Section title** (bookmark-wrapped): **"Projects that I've done"**
- **Six project cards**, count fixed at 6, content placeholder for now —
  build the component fully data-driven against this shape so real content
  drops in without touching layout or animation code:

  ```ts
  interface Project {
    title: string;
    description: string; // short, 1–2 sentences
    githubUrl: string;
    liveUrl?: string; // optional — not every project has a deployed URL
  }
  ```

  Ship with 6 placeholder entries (`"Project 1"` … `"Project 6"`, lorem-ish
  short descriptions, dummy URLs) so the scroll mechanics and layout are
  fully verifiable before real data exists.

## Motion spec

Referencing `projects.png`'s composition — cards linked in sequence by a
ribbon that threads through a hole near the top of each card:

1. Title reveals via `SectionTitle`.
2. The ribbon, still the same persistent object from earlier sections,
   re-targets its curve to pass through six anchor points, one per card,
   spaced along its length.
3. As the user scrolls, cards travel through the viewport along the
   ribbon's path (or the camera dollies along the ribbon — either
   approach is fine, pick whichever is simpler to implement cleanly) and
   settle into view one at a time before the next one arrives.
4. Each card, while settled, shows its title, description, and real
   links — not floating WebGL text, an actual `<a>` tag layered via
   `drei`'s `<Html transform>` so it's genuinely clickable and tab-
   reachable.

## Technical implementation

- Represent the ribbon path as a `CatmullRomCurve3` with 6+ control
  points; sample a position + a "hole" anchor point near the top of each
  card mesh so the ribbon visibly threads through it (a small ring/torus
  or a cutout in the card geometry at that point reinforces the effect).
- Camera dolly vs. card translation: whichever you implement, drive it off
  one `ScrollTrigger` scoped to this section (`scrub: true`), mapping
  scroll progress linearly to position-along-curve (`t` from 0 to 1 across
  6 cards → `t` per card is `i / 5`).
- Card component (`ProjectCard`) renders inside `<Html transform>` so it's
  real DOM: title, description, a GitHub icon-link, and — only if
  `liveUrl` is present — a second link. Don't render an empty/dead link
  slot when `liveUrl` is missing.

## Component/file suggestions

`ProjectsSection.tsx`, `ProjectCard.tsx`, `projects.data.ts` (the typed
placeholder array), reused `Ribbon.tsx`, reused `SectionTitle.tsx`.

## Acceptance criteria

- [ ] Exactly six cards, each visibly threaded on the same ribbon used
      elsewhere on the site (not a new/different ribbon instance).
- [ ] Cards settle long enough to read the description before the next one
      arrives — verify by timing a normal scroll pass.
- [ ] GitHub link is always present and correct per card; live-URL link
      only renders when the data has one.
- [ ] All links are real anchor tags — verify by right-click → "Open link
      in new tab" actually working, and by tabbing through the section
      with keyboard only.
- [ ] Swapping the placeholder `projects.data.ts` array for real content
      requires no changes to `ProjectsSection.tsx` or `ProjectCard.tsx`.

## Open items

- Real project content (title/description/links for all six) is not yet
  provided — this file ships with placeholders by design; final content
  to follow separately.
- Confirm whether project count could ever exceed six later — if so, the
  ribbon-threading math should be built to accept `n` cards, not hardcoded
  to 6, even though today's spec is fixed at 6.
