# AI SAFE EARTH brand, v3 (hi-vis / vector)

This is the source of truth for marks, colour, type, voice and badges across every `ai-safe-earth` surface. It replaces v2 (the Earthrise emblem, the four rings, Archivo and Spectral).

> **We provide the materials. You build an AI safe world.**
> Three fronts (street, code, decision makers), three ways to contribute (build, research, communicate), one fight.

---

## 1. The idea

AI SAFE EARTH is action. Every part of the system has a heading, a target and a speed. Nothing is a closed circle, a seal or an ornament. Authority comes from what ships: audits run, PRs merged, towns mapped.

Three fronts, one fight:

| Front (who acts) | Who | Colour on the web |
|---|---|---|
| **STREET** | anyone: individuals, community and association leaders | violet `#7B3CFF` |
| **CODE** | developers and engineers | hi-vis `#E6FF00` |
| **DECISION MAKERS** | local administrations, organisations, institutions | ultramarine `#2D4BFF` |

Contributors work in three branches, one fight: **BUILD** (apps and tools), **RESEARCH** (actionable), **COMMUNICATE** (education, think tank). On GitHub, the three colours mark the branches: BUILD `#E6FF00`, RESEARCH `#2D4BFF`, COMMUNICATE `#7B3CFF`.

The method is **Spot · Build · Hit**, a 1, 2, 3 rhythm:

1. **Spot** a risk or an opportunity.
2. **Build** the strategic material: a tool, content, software, an app, an article.
3. **Hit:** put it in the hands of whoever executes it.

Animated diagrams for GitHub live in `art/`. Text is rasterised inside each SVG and the motion is SMIL only, with no `<style>`, so they render on GitHub. Each has a static `.png` fallback.

---

## 2. Mark

Three rings are the three fronts. Their arrows converge on one filled node, the goal.

| File | Use |
|---|---|
| `mark.svg` | ink on any light ground, including yellow |
| `mark-yellow.svg` | yellow on black |
| `mark-on-black.svg` | yellow on a black square, for app icons and avatars |
| `favicon-small.svg` | ≤24px cut without arrowheads (rings, lines, node) |
| `mark-*-1024.png`, `favicon-*.png` | raster masters |

All mark files are geometry only, so they render correctly on GitHub.

**Rules**

- The mark is on a 48 grid with a 3.6 stroke, round caps and round joins. At 24px and below, use `favicon-small.svg`.
- The minimum size is 16px. Clear space is one ring diameter on every side.
- Colours are ink, yellow or paper only. Never red, blue or violet: the mark is the whole org, not one front.
- Never rotate it, fill the rings, add a fourth ring, set text inside it, or put it in a circle.
- On a landing hero the mark may animate: the arrows travel in and the node pulses on the hit. Respect `prefers-reduced-motion`.

**Wordmark:** `AI SAFE EARTH` set in Anybody 900 at 130% width and −0.01em tracking, as live text wherever it sits next to text. On GitHub, use `profile-banner.png`, because GitHub loads no webfonts.

---

## 3. Colour

| Token | Hex | Role |
|---|---|---|
| `--aise-yellow` | `#E6FF00` | brand, action, every primary button, `+` in a diff, code front · BUILD branch |
| `--aise-ink` | `#0A0A0A` | text, code, the default ground |
| `--aise-paper` | `#F4F4EF` | reading ground for long text |
| `--aise-white` | `#FFFFFF` | alternate light ground |
| `--aise-red` | `#FF3B30` | **risk or finding only**, and `−` in a diff |
| `--aise-blue` | `#2D4BFF` | decision-makers front · RESEARCH branch |
| `--aise-violet` | `#7B3CFF` | street front · COMMUNICATE branch |
| `--aise-grey` | `#3A3A36` | hairlines on light grounds, neutral chips |
| `--aise-line` | `#2A2A2A` | hairlines on black |

**Rules**

- Each view uses **yellow, ink and one signal colour**, at most. Blue or violet may also take over a whole section as its ground.
- The landing ground is black by default, with white and ultramarine as alternates. Yellow grounds the header, footer and stickers, not whole pages.
- Red is never decoration, never a brand colour and never a ground.
- Yellow text only works on ink, blue or violet. On paper or white, yellow becomes a block behind ink text.
- Text on yellow is always ink. Never white on yellow.
- No gradients and no glows. Use square corners, 1px hairlines, and flat shadows only as a pressed or hover offset.

---

## 4. Type

Two families, both SIL OFL. See [`fonts.md`](./fonts.md).

| Role | Family | Setting |
|---|---|---|
| Headlines | Anybody 900 | caps, 120–130% width, −0.035 to −0.045em, 0.86–0.92 leading |
| Text | Anybody 400 | 17–22px, 1.5 leading, sentence case |
| Labels, code, data | IBM Plex Mono 500/600 | caps with +0.06 to +0.12em tracking for labels, normal case for code |

- Headlines stay short. Wide caps eat space, and that's the discipline.
- Mono is for anything measured or technical: times (`5 MIN`), counts, commands, diffs, badges.
- Never set body copy in caps, and never use a third family.

---

## 5. Voice

Use field orders. Keep it short and imperative, lead with the action, and give numbers that change a decision.

- **Yes:** "Audit the repo. Flag the risk. Ship the fix. Next." · "We don't rely on social media to socialise. We build real networks." · "We don't talk about the end of the world. We build a better one."
- **Values:** Act first · Street to server · Joy is a tactic · No permission needed.
- **Banned:** "unlock", "empower", "journey", "seamless", "revolutionary", exclamation marks, emoji, and any guarantee that something is "safe".
- Name the source and the date of anything uncertain.
- Most actions need no code, so say so. Never write as if only developers can act.

---

## 6. Badge grammar

On every badge: `style=flat-square&labelColor=0A0A0A`, `UPPER_SNAKE` labels, `%` written `%25`, `+` written `%2B`, alt text in sentence case.

| Badge | Colour |
|---|---|
| Branch and stage, always **first** | BUILD `E6FF00` · RESEARCH `2D4BFF` · COMMUNICATE `7B3CFF` |
| Progress | the branch colour |
| `DONE` / `ACTIVE` / `OPEN` chips | `3A3A36` |
| `RISK` chips | `FF3B30` |
| Links, licence, language, version | `2D4BFF` |
| Umbrella, always **last**, project repos only | `0A0A0A` |

Stages: `CONCEPT` · `EARLY_STAGE` · `IN_DEVELOPMENT` · `IN_PROGRESS` · `GOING_TO_MARKET` · `LIVE`.

```
![Build: tool, early stage](https://img.shields.io/badge/BUILD-EARLY_STAGE-E6FF00?style=flat-square&labelColor=0A0A0A) ![Progress: 40%](https://img.shields.io/badge/PROGRESS-40%25-E6FF00?style=flat-square&labelColor=0A0A0A) ![Risk: evals missing](https://img.shields.io/badge/RISK-evals_missing-FF3B30?style=flat-square&labelColor=0A0A0A)
[![AI SAFE EARTH](https://img.shields.io/badge/AI_SAFE_EARTH-build_research_communicate-0A0A0A?style=flat-square&labelColor=0A0A0A)](https://github.com/ai-safe-earth)
```

---

## 7. Project repo README skeleton

```markdown
<img src="./.github/brand/mark.svg" width="56" alt="AI SAFE EARTH">

# Project name

![Build: app, in development](…) ![Progress: 20%](…) ![Licence](…) [![AI SAFE EARTH](…)](https://github.com/ai-safe-earth)

One sentence: what it does, and for whom.

---

## Take an action
The fastest way to help with this project: one line each for a developer, a contributor and anyone else.

---

…

<sub>A project under AI SAFE EARTH · build · research · communicate · <a href="https://github.com/ai-safe-earth">github.com/ai-safe-earth</a></sub>
```

Project apps keep their own brand in the product (laiive fuchsia, VaiVia lime). The repo surface wears the AI SAFE EARTH mark and badge row.

---

## 8. Branch assignment

| Repo | Branch |
|---|---|
| `laiive` | BUILD · app |
| `VaiVia` | BUILD · app |
| `AI-Safety-Guardrails` (AISG, guardrails + audit) | BUILD · tool |
| `AI-Safe-Territory` + living book | RESEARCH |
| AI Safety for Community Leaders | COMMUNICATE |
| `whitepaper` | independent, at the foot of the profile |
