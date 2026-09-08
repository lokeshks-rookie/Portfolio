# 02 — Programming Languages Expertise

Read `port_brand.md` first. This prompt builds the skills section: one
section title, then three sequential 3D card carousels, each with its own
bookmark-wrapped subtitle.

## Objective

Three horizontal card carousels — Problem Solving, Web Programming,
Database — each set of cards revolving around a vertical floating bookmark
pole, entered and exited purely through scroll, visually continuous with
the ribbon motif established in the opening sequence.

## Structure and exact content

1. **Section title** (bookmark-wrapped, same `SectionTitle` treatment as
   the hero): **"Programming Languages expertise"** — pair this reveal with
   a composition loosely inspired by `languages.png`: cards receding into
   depth along the ribbon. Treat that image as a reference for *depth and
   rhythm*, not a literal layout to replicate — see the note on this in the
   brief discussion; it's a mood board, not a spec.

2. **Carousel 1 — "Problem solving"** (bookmark-wrapped subtitle, then the
   carousel):
   - Python
   - Java
   - C
   - C++

3. **Carousel 2 — "Web Programming"** (bookmark-wrapped subtitle, then the
   carousel):
   - HTML
   - Tailwind CSS
   - JavaScript
   - TypeScript

4. **Carousel 3 — "Database"** (bookmark-wrapped subtitle, then the
   carousel):
   - MongoDB
   - MySQL
   - SQLite
   - ChromaDB
   - DuckDB

## Motion spec (per carousel)

1. Subtitle reveals via `SectionTitle` (ribbon wrap), same treatment as the
   hero line — this is a **shared component**, not a rebuild per section.
2. A vertical `Ribbon` segment (or a thin cylinder styled to match) rises
   as the "pole." Cards fan in around it from a collapsed/hidden state.
3. As the user scrolls through this carousel's allotted scroll range, the
   card group's `rotation.y` advances — map scroll progress (0→1) linearly
   to rotation angle. A full 360° revolution across the section's scroll
   range is a reasonable default; tune to taste.
4. Cards fade/scale out (or the whole group dollies away) as the section
   ends, and the next carousel's subtitle begins revealing — avoid a hard
   cut between carousels; overlap the exit of one with the entry of the
   next slightly for continuity.

## Technical implementation

- Each carousel is its own `SkillCarousel` component taking a typed array
  of `{ name: string }` (or `{ name: string; icon?: string }` once icons
  are sourced — see open item below) so all three carousels share one
  implementation.
- Card layout: `angle = (i / n) * Math.PI * 2`, position on a circle of
  radius ~2–3 units around the pole, each card a `RoundedBox` (or plane)
  with a `drei` `<Html>` label for the language name — real text, not
  baked, so it scales cleanly and stays crisp.
- Rotation driven by a `ScrollTrigger` scoped to that carousel's DOM
  section, `scrub: true`, updating the group's `rotation.y` in the
  `onUpdate` callback (or via a GSAP tween of a ref value read in
  `useFrame`).
- Keep the three carousels visually identical in mechanics (same radius
  logic, same card size, same rotation behavior) — only the pole label and
  card count/content differ. Consistency here is what makes it read as one
  system rather than three different widgets.

## Component/file suggestions

`SkillsSection.tsx` (wraps all three), `SkillCarousel.tsx` (shared,
data-driven), `SkillCard.tsx`, reused `SectionTitle.tsx`, reused
`Ribbon.tsx`.

## Acceptance criteria

- [ ] "Programming Languages expertise" title appears once, before any
      carousel starts.
- [ ] Each carousel's subtitle appears before its cards do, using the same
      bookmark-wrap treatment as the hero.
- [ ] Cards visibly revolve around a vertical pole as the user scrolls —
      confirm the rotation direction and speed feel intentional, not
      accidental or nauseating (don't over-rotate per scroll pixel).
- [ ] All three carousels behave identically in mechanics; only content
      differs.
- [ ] Card counts of 4 and 5 (Database has five items) both lay out evenly
      around the circle without crowding or overlap.
- [ ] Scrolling back up reverses each carousel's rotation correctly.

## Open items

- Language icons/logos aren't sourced yet — decide between an icon set
  (Devicon, Simple Icons) recolored to the palette, or flat custom marks.
  Until then, ship with text-only cards; don't block the carousel mechanics
  on icon sourcing.
- Confirm whether cards should be interactive (click for a short blurb per
  language) or purely decorative — current spec assumes decorative-only.
