---
name: brand-check
description: Audit markdown against the AI SAFE EARTH brand kit before it goes into a pull request — emoji, text-bearing SVGs on GitHub, badge grammar, heading structure, footer format, name casing. Use when reviewing or finishing any change to profile/README.md, profile/brand/, or a project repo README.
---

Audit `$ARGUMENTS` — a file path, a directory, or the current diff (`git diff main...HEAD`) if nothing is given.

Report findings as `file:line — what's wrong — the fix`. If everything passes, say so in one line. Do not fix anything without saying what you are changing first.

## Checks

**1. Emoji — hard prohibition.** No emoji in prose, headings, badge labels or alt text. Scan for characters outside Latin/punctuation ranges. The sanctioned separator `·` (U+00B7) and the em dash are fine.

**2. Text-bearing SVGs on GitHub.** GitHub does not load webfonts, so any SVG that sets live text renders wrong. Flag markdown that references `banner.svg`, `ai-safe-earth-wordmark*.svg`, or `ai-safe-earth-seal*.svg`. Correct targets: `profile-banner.png`, `logo/ai-safe-earth-wordmark*.png`, `logo/ai-safe-earth-seal-1280.png`. Geometry-only SVGs — `mark.svg`, emblems, icons, favicons, four-rings, project marks — are safe and should not be flagged.

**3. Badge grammar.** Every `img.shields.io/badge/` URL must carry `style=flat-square` and `labelColor=131A21`. Label half is `UPPER_SNAKE`. `%` is encoded `%25`. Pillar/stage badge first and in the project's point colour; checklist chips `4A5560`; links/licence/language/version `1F5D7A`; umbrella `131A21` and last. Stage words must come from `CONCEPT · EARLY_STAGE · IN_DEVELOPMENT · IN_PROGRESS · GOING_TO_MARKET · LIVE`; checklist halves from `DONE · ACTIVE · OPEN · RISK`.

**4. Umbrella placement.** `profile/README.md` in this repo carries no umbrella badge and no vendored `mark.svg` header — it is the umbrella. A project repo README must have both, with the umbrella badge last and linked to `https://github.com/ai-safe-earth`.

**5. Structure.** In `profile/README.md`: banner image alone on line 1 with no H1, a `---` between every section, heading levels that never skip, `*(in progress)*` italics for unfinished items, and one single-line badge row per project heading.

**6. Footer.** Raw HTML `<sub>`, `·` separators, `&` written as the entity `&amp;`. Project repos open the footer with "A project under"; documents use "A document of".

**7. Name and colour.** `AI SAFE EARTH` — three words, all caps in prose, never abbreviated or re-weighted. No `#000`/`black` or `#fff`/`white`: ink is `#131A21`, paper is `#F2EFE8`. No gradients, pills, monospace or diagonal wedges. Flag any leftover "Dialogoo" outside commit history.

**8. Emblem misuse.** Flag any description or asset edit that closes the ring, recolours the disc, or sets a project name inside the emblem. Project-coloured marks have a 64px floor; the wordmark has a 96px floor.

## Source of truth

`profile/brand/README.md`. If a check here disagrees with it, that file wins — report the divergence so this skill can be corrected.
