# 01 — Opening Sequence

Read `port_brand.md` first. This prompt builds the site's cold open: the
hero line, its scroll-triggered swap, the ribbon leading into a closed book,
the book opening to the bookmarked spread, and the book closing again before
the next section.

## Objective

A single pinned, scroll-scrubbed sequence that takes the visitor from a
bare hero line to a fully-read introduction, entirely through scroll —
no clicks, no autoplay.

## Exact copy (use verbatim)

- Hero line, state A: **"Wanna know about me ?"**
- Hero line, state B (after scroll): **"Sure come on in ..."**
- Intro bio (settles inside the open book):

  > Heya !, This is K.S.Lokesh , right now I'm an undergrad student pursuing
  > Computer Science in Thiagarajar College of Engineering , Madurai . I'm
  > aspiring to be become a well established Developer in all of my
  > Interested fields like Software , Cloud , Networks and Security , AI-ML
  > and this list moves further as I experience a lot of new concepts in
  > Life . So to put it in a nutshell , I'm a man who does work in a way
  > that people would be immersed and impressed to look at . And so in this
  > journey nice to meet ya !

  **Open item:** this says "Computer Science" — confirm against actual
  enrollment before shipping (flagged in `port_brand.md`). Don't silently
  change it; it's your bio, so the correction has to come from you.

## Scroll storyboard

Build this as one `ScrollTrigger` (`pin: true`, `scrub: true`) spanning a
tall section (start around `400vh` of scroll distance and tune from there),
with a single GSAP timeline whose stages are scroll-scrubbed labels:

1. **Hero.** State-A text alone, centered, large, wrapped in a short ribbon
   flourish (the `Ribbon` component with a small curve hugging the text's
   bounding box).
2. **Text morph.** On scroll, State-A crossfades and translates out while
   State-B fades/translates in. The ribbon wrap stays continuous through the
   swap — same `Ribbon` instance, curve re-targeted, not two separate ribbons.
3. **Ribbon draws inward.** The ribbon detaches from the text and animates
   toward a bookmark position: a vertical line marking the spine of a closed
   book that fades into view ahead in z-space.
4. **Book appears, closed.** The `Book` component renders: cover only,
   ribbon bookmark visibly poking out from the marked page.
5. **Cover opens.** Cover mesh rotates open (hinge on the spine edge,
   roughly 0° → 160–170°, not a full 180° so it reads as "open," not
   "flat").
6. **Pages turn.** 3–4 generic/blank page planes flip past in sequence
   (staggered hinge rotation), simulating flipping to the marked spot.
7. **Settle on the bookmarked spread.** Motion stops. The intro bio appears
   as an **HTML overlay**, not baked into the canvas — positioned over the
   open page's on-screen bounds. Hold here for a beat of extra scroll
   distance so it's actually readable, not skimmed past.
8. **Close.** After the hold, pages flip back, cover closes, book shrinks
   or dollies away, and the pinned section releases into the next one
   (Programming Languages Expertise).

## Technical implementation

- `Book` and `BookPage` per `port_brand.md` — procedural geometry only
  (`BoxGeometry` cover, `PlaneGeometry` pages), no external 3D asset.
- Drive every stage off **one** GSAP timeline tied to the section's
  `ScrollTrigger`, using labels (`tl.addLabel('open')`, etc.) so stage
  boundaries are easy to retune without touching the animation logic.
- The HTML bio overlay: since the camera is effectively static through
  steps 5–7, you can position it with a fixed-position container timed to
  fade in via the same GSAP timeline (`tl.to('.bio-overlay', { opacity: 1 },
  'settle')`) rather than doing a full 3D→2D projection — simpler and
  reliable for this one static moment.
- Ribbon control points for step 3 should interpolate from "wrapped around
  hero text's screen position" to "vertical line at book spine's world
  position" — precompute both point sets, `lerp` between them driven by
  scroll progress.

## Component/file suggestions

`OpeningSequence.tsx` (orchestrates the ScrollTrigger + timeline),
`HeroText.tsx`, reused `Ribbon.tsx`, reused `Book.tsx` / `BookPage.tsx`,
`BioOverlay.tsx`.

## Acceptance criteria

- [ ] Scrolling from the top shows only the hero line, no book visible yet.
- [ ] Hero text swaps from state A to B smoothly, ribbon wrap uninterrupted.
- [ ] Ribbon visibly travels from wrapping the text to marking the book.
- [ ] Book opens, visibly flips a small number of pages, and settles —
      the visitor should be able to tell it "found" the marked page rather
      than just stopping arbitrarily.
- [ ] Bio text is selectable, real HTML — verify with a browser text search
      (Cmd/Ctrl+F) that it's findable.
- [ ] Book closes and the section releases into the next one without a
      hard cut — scroll should feel continuous throughout.
- [ ] Reversing scroll direction (scrolling back up) reverses the sequence
      cleanly — this is a scrub, not a one-shot animation.
