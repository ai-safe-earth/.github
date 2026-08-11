# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

`ai-safe-earth/.github` — the GitHub organization profile for AI SAFE EARTH, plus the org's brand kit. Content only: no build, no tests, no CI, no linter, no package manifest. Pushing to `main` is the publish step.

## Load-bearing paths

- GitHub renders the org profile from `profile/README.md` and nowhere else. Moving or renaming it silently blanks the org page.
- There is deliberately no root `README.md`. Adding one does not appear on the org page.
- `profile/brand/` is the single source of truth for the org's marks, palette and type. Read `profile/brand/README.md` before touching anything visual.
- The local clone sits under a `DIALOGOO` parent directory. That is the pre-rename name — the organization is AI SAFE EARTH. Never reintroduce "Dialogoo" into content.

## Workflow

- Every change goes on a branch and through a pull request, even solo ones. Never commit to `main` directly.
- Conventional commit messages (`feat:`, `fix:`) — see `profile/contributing.md`.
- `profile/brand/ROLLOUT.md` is a live checklist, not a record. Treat it as read-only: when a rollout item looks complete, say so and ask before ticking it.

## Brand invariants

Full grammar lives in `profile/brand/README.md`. These are the rules that break silently:

- **No emoji** — prose, headings, badges, anywhere. Use a badge label half instead: `DONE-…`, `ACTIVE-…`, `OPEN-…`, `RISK-…`.
- **On GitHub use the PNG masters, never the SVGs that set text.** GitHub does not load webfonts, so text-bearing SVGs fall back to Helvetica at Archivo's letter-spacing: use `profile-banner.png` not `banner.svg`, `logo/…wordmark*.png` not `…wordmark*.svg`, `logo/…seal-1280.png` not `…seal*.svg`. Geometry-only SVGs (`mark.svg`, emblems, icons, favicons, project marks) are safe anywhere.
- **The emblem**: never close the ring, never recolour the disc, never set a project name inside it. Only the point changes colour, one per project.
- **The name** is three words at one size and one weight, so "AI" carries no more voice than "EARTH". `AI SAFE EARTH` in prose.
- No gradients, no pills, no monospace, no diagonal wedge. Square corners, hairline rules. Ink `#131A21` instead of black, paper `#F2EFE8` instead of white.

## profile/README.md conventions

- Opens with the banner image alone — no H1. A `---` rule between every section. Heading levels never skip.
- In-progress items are marked `*(in progress)*` in italics.
- Each project heading is followed by one line of space-separated badges. `%` is URL-encoded `%25`.
- The org profile carries **no** umbrella badge and **no** vendored `mark.svg` header — this page is the umbrella. Those belong in project repos, per the skeleton in `profile/brand/README.md`.
- Footer is raw HTML `<sub>`, separators are `·` (U+00B7), and `&` is written as the entity `&amp;`.
