# 06 — Footer

Read `port_brand.md` first. This prompt builds the final, plain-DOM footer:
social links, contact information, and a Hobbies block. No WebGL — the
canvas has already unmounted by this point per `05-closing-sequence.md`.

## Objective

A standard, well-organized footer that stays inside the established palette
and type system without trying to be another "immersive" set piece — after
five heavily-choreographed sections, the footer's job is to be simple,
scannable, and functional.

## Content

All placeholder pending your input — build data-driven so real values drop
in without touching layout:

```ts
interface FooterData {
  socials: { platform: string; url: string }[]; // e.g. GitHub, LinkedIn, X, Instagram
  contactEmail: string;
  hobbies: string[]; // short list, e.g. ["Reading", "Football", "..."]
}
```

## Layout

Three regions, laid out responsively (stacked on mobile, side-by-side on
desktop):

1. **Social** — icon-linked buttons (GitHub, LinkedIn, and whichever
   others you use), each a real `<a>` with `target="_blank"` and
   `rel="noopener noreferrer"`.
2. **Contact** — your email as a `mailto:` link at minimum. Optionally, a
   small contact form instead of/alongside the `mailto:` link — your call;
   a `mailto:` link is zero-backend and reliable, a form needs somewhere to
   send submissions (a form endpoint service, or a small backend route) and
   is more work for marginal gain on a personal portfolio. Default to the
   `mailto:` link unless you specifically want the form.
3. **Hobbies** — a short, simple list or tag-style row, not another
   carousel or card grid — keep this visually quiet.

## Technical implementation

- Plain Tailwind flex/grid, no `<Canvas>`, no GSAP scroll-scrub needed —
  a simple fade-in on entering the viewport is enough (or none at all;
  footers are usually fine appearing instantly).
- Icons via an icon library (e.g. `lucide-react`, already common in this
  kind of stack) or `simple-icons` for brand-accurate social marks,
  recolored to the accent palette.
- Keep font and color usage identical to the rest of the site — this is
  not a place to introduce a darker "footer theme," a common default in
  templates that would break consistency here.

## Component/file suggestions

`Footer.tsx`, `SocialLinks.tsx`, `footer.data.ts` (typed placeholder data).

## Acceptance criteria

- [ ] Every social icon links out correctly and opens in a new tab.
- [ ] Contact email is a working `mailto:` link (or a functioning form, if
      you choose that route).
- [ ] Hobbies render as a simple, non-distracting list.
- [ ] No WebGL canvas is present anywhere in the footer's DOM subtree.
- [ ] Footer is fully responsive and readable at mobile width.

## Open items

- Actual social platform list and handles/URLs not yet provided.
- Contact email not yet provided.
- Hobbies list not yet provided.
- Confirm `mailto:` link vs. contact form before implementation — this
  affects whether any backend/form-service work is needed at all.
