# 05 — Closing Sequence

Read `port_brand.md` first. This prompt builds the site's sign-off: the
ribbon ties into a second book, but this time only its top cover is ever
shown — it never opens — carrying two short lines before the footer.

## Objective

A quiet, restrained close that mirrors the opening's book motif without
repeating its full open/close animation — deliberately incomplete, since
the copy itself is about not knowing what's next.

## Exact copy (use verbatim, in this order)

1. **"This book marks the future and even I don't know that for certain,
   so let us leave it to the fate !"**
2. **"Thank You and see you again !"**

## Motion spec

1. The ribbon (same persistent object) draws toward a final resting point
   and ties off into a knot/bow — reuse the static bow asset/mesh from the
   opening sequence's ribbon terminus rather than building a second one.
2. The `Book` component renders again, but in **cover-only mode** — no
   page-opening logic fires here at all. This is a deliberate restriction:
   don't reuse the full open animation from `01-opening-sequence.md`, just
   the cover mesh.
3. Line 1 fades in over/near the cover as HTML overlay text, holds briefly.
4. Line 1 fades out, line 2 fades in, holds briefly.
5. The whole scene (book, ribbon, canvas) fades or dollies away, releasing
   into the footer, which is plain DOM from this point on — the WebGL
   canvas can safely unmount here since nothing below needs it.

## Technical implementation

- Extend `Book.tsx` with a mode prop (e.g. `mode: 'closed' | 'opening'`)
  rather than duplicating the component — `closed` mode skips all page
  hinge-rotation logic and simply renders the cover mesh.
- Two-line copy reveal is a simple two-step GSAP timeline (`fade in → hold
  → fade out → fade in → hold`), tied to this section's own
  `ScrollTrigger`, independent of the opening sequence's timeline.
- On exit, either fade the `<Canvas>`'s container opacity to 0 and set
  `pointerEvents: none`, or fully unmount the R3F tree once this section's
  scroll range ends — unmounting is preferable for performance, since the
  footer has no further 3D content.

## Component/file suggestions

`ClosingSequence.tsx`, reused `Book.tsx` (extended with the closed-cover
mode), reused `Ribbon.tsx`.

## Acceptance criteria

- [ ] The book cover appears but visibly never opens in this section — no
      page-turn animation fires here at all.
- [ ] Line 1 and line 2 appear in sequence, not simultaneously, each
      readable before it fades.
- [ ] The ribbon visibly ties off into the same bow used in the opening,
      not a newly modeled one.
- [ ] The WebGL canvas is confirmed unmounted (check dev tools) once the
      visitor scrolls into the footer — no idle GPU cost past this point.
- [ ] Scrolling back up from the footer replays this sequence correctly.
