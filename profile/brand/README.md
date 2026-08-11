# AI SAFE EARTH — brand

The v2 institutional identity. This directory is the **single source of truth** for the
organization's marks, palette and type. Anything visual in any `ai-safe-earth` repo should
come from here.

Other repos vendor what they need — usually just `mark.svg` at
`<repo>/.github/brand/mark.svg` — or link to the raw file:

```
https://raw.githubusercontent.com/ai-safe-earth/.github/main/profile/brand/<path>
```

---

## The emblem

A solid earth disc, an open ring around it — the fourth ring, around communities, the one
nobody has built yet — and one warm point where a community stands, closing it. Three
primitives, two scales: the whole planet and the street.

**Never close the ring. Never recolour the disc. Never set a project name inside the
emblem.**

---

## Colour

| Role | Token | Hex | Use |
|---|---|---|---|
| Ink | `--ase-ink` | `#131A21` | text, rings on paper, dark grounds — **instead of black, always** |
| Paper | `--ase-paper` | `#F2EFE8` | surfaces, rings on ink — **instead of white, always** |
| Sea | `--ase-sea` | `#1F5D7A` | the disc, and links. Never any other element |
| Clay | `--ase-clay` | `#C4692A` | the point. The only element that may change colour |
| Clay ink | `--ase-clay-ink` | `#A5541F` | clay as text, hover state |
| Slate | `--ase-slate` | `#4A5560` | body text, hairlines on ink |
| Stone | `--ase-stone` | `#C3BEB2` | hairline rules, borders |
| Mist | `--ase-mist` | `#9AA3A8` | muted labels |
| Page | `--ase-page` | `#DCD8CE` | background behind paper panels |
| Paper alt | `--ase-paper-alt` | `#EAE6DC` | alternate paper tone |

Flat colour only — no gradients, shadows, glows or bevels. Machine-readable in
[`brand-palette.json`](./brand-palette.json); CSS variables in
[`brand-tokens.css`](./brand-tokens.css).

### Project points

Only the place-point changes. The disc and the ring are the organization.

| Project | Point | Mark |
|---|---|---|
| AI Safe Territory | `#C4692A` | [`projects/…-ai-safe-territory.svg`](./projects/ai-safe-earth-emblem-ai-safe-territory.svg) |
| AI Safety Guardrails | `#2E7D74` | [`projects/…-guardrails.svg`](./projects/ai-safe-earth-emblem-guardrails.svg) |
| UDO | `#8A6D2F` | [`projects/…-udo.svg`](./projects/ai-safe-earth-emblem-udo.svg) |
| laiive | `#A63D6E` | [`projects/…-laiive.svg`](./projects/ai-safe-earth-emblem-laiive.svg) |
| get-out-door | `#4F7A3D` | [`projects/…-get-out-door.svg`](./projects/ai-safe-earth-emblem-get-out-door.svg) |
| whitepaper | `#C4692A` | org-level document — uses the organization point |

Each has an `-inverse` variant with the ring in paper, for ink grounds. Minimum size for a
project-coloured mark is **64px** — below that the point cannot be read as a colour, so use
the organization mark.

---

## Type

- **Archivo** 400 · 500 · 600 · 700 — *the institution*. Headings, labels, the wordmark.
  Uppercase and letterspaced for labels.
- **Spectral** 400 · 500 · 600 · italic 400 — *the argument*. Running prose, the book, the
  whitepaper.
- **No monospace.** There is none in this system.

The name is set at one size and one weight across all three words, so "AI" carries no more
voice than "EARTH". Details and embed code in [`fonts.md`](./fonts.md).

---

## GitHub rendering — read this before adding artwork

GitHub sandboxes user content and **will not load webfonts**. Any SVG that sets live text
falls back to Helvetica while keeping letter-spacing fitted to Archivo's advance widths,
which looks subtly wrong.

**On GitHub, use the PNG masters.** They were captured with Archivo rendered, so they are
correct by construction:

| Need | Use | Not |
|---|---|---|
| Org profile banner | `profile-banner.png` | `banner.svg` |
| Wordmark | `logo/ai-safe-earth-wordmark*.png` | `…wordmark*.svg` |
| Seal | `logo/ai-safe-earth-seal-1280.png` | `…seal*.svg` |

The geometry-only files carry no text and are safe everywhere: `mark.svg`, the emblems,
icons, favicons, four-rings diagram and every project mark. The `.svg` wordmarks and seal
are for contexts where you control the font — websites loading Archivo, Quarto books,
print.

---

## Repository README skeleton

Every repo in the org opens and closes the same way.

```markdown
<img src="./.github/brand/mark.svg" alt="AI SAFE EARTH" width="72">

# <Title>

> <one-line tagline>

![Pillar](https://img.shields.io/badge/<PILLAR>-<STAGE>-<point>?style=flat-square&labelColor=131A21)
[![Umbrella](https://img.shields.io/badge/AI_SAFE_EARTH-open_umbrella-131A21?style=flat-square&labelColor=131A21)](https://github.com/ai-safe-earth)

---

## …

---

<sub>A project under <a href="https://github.com/ai-safe-earth">AI SAFE EARTH</a> · the fourth ring, around communities · AI safety &amp; civic tech</sub>
```

Documents rather than projects open the footer with *"A document of"*.

### Badge grammar

Every badge, in every repo:

- `style=flat-square` — always
- `labelColor=131A21` — always
- Label text `UPPER_SNAKE`, underscores for spaces
- The umbrella badge is always last
- **No emoji.** Use a label half instead: `DONE-…`, `OPEN-…`, `RISK-…`

| Badge | Colour |
|---|---|
| Pillar / stage — always first | **the project point**, whatever the stage |
| Links, licence, language, version | `#1F5D7A` |
| Metadata, standards, checklist chips | `#4A5560` |
| Umbrella — always last | `#131A21` |

Stage vocabulary, in order: `CONCEPT` · `EARLY_STAGE` · `IN_DEVELOPMENT` · `IN_PROGRESS` ·
`GOING_TO_MARKET` · `LIVE`. Checklist chips use `DONE` · `ACTIVE` · `OPEN` · `RISK` as the
label half.

---

## Brand architecture

Projects are **endorsed**, not absorbed and not independent. Which identity applies depends
on the surface:

| Surface | Identity |
|---|---|
| GitHub repo | The emblem with the project's point colour, the badge row, the umbrella footer |
| App UI, store listing, product website | The project's own brand — plus an AI SAFE EARTH endorsement lockup |

So `laiive` on GitHub wears the emblem at `#A63D6E`; the laiive app wears laiive's own
mark and colour, and says it is an AI SAFE EARTH project.

---

## Rules

1. All three words of the name at one size and one weight, so AI carries no more voice than EARTH.
2. Clear space equals the radius of the disc.
3. Minimum wordmark width 96px; below that use the core mark alone.
4. Project-coloured variants have a floor at 64px; below it use the organization mark.
5. No gradients, no pills, no monospace, no emoji, no diagonal wedge. Square corners, hairline rules.
6. Layout devices come from the map, not the pitch deck: scale bars, corner ticks, crop marks.

---

## Files

```
profile/brand/
├─ mark.svg                  the emblem on an ink plaque — what repos vendor
├─ banner.svg                org banner, live text (do not use on GitHub)
├─ profile-banner.png        org banner 924×462, Archivo rendered — use this on GitHub
├─ brand-palette.json        palette + project points + rules, machine-readable
├─ brand-tokens.css          the same as CSS custom properties
├─ fonts.md                  type system and embed code
├─ logo/                     emblem, wordmark, seal, icon, favicons, four-rings diagram
└─ projects/                 per-project endorsement marks, normal and inverse
```
