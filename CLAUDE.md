# CLAUDE.md

This file guides Claude Code (claude.ai/code) when it works in this repository.

## What this repo is

`ai-safe-earth/.github` holds the GitHub organisation profile for AI SAFE EARTH and the org's brand kit. It is content only: no build, tests, CI, linter or package manifest. Pushing to `main` publishes.

## Load-bearing paths

- GitHub renders the org profile from `profile/README.md` and nowhere else. Moving or renaming it blanks the org page without any warning.
- There is deliberately no root `README.md`.
- `profile/brand/` is the source of truth for marks, palette and type.
- Never reintroduce "Dialogoo" into content.

## Workflow

- Every change goes on a branch and through a pull request, even solo changes. Never commit to `main`.
- Use conventional commit messages (`feat:`, `fix:`).

## Brand v3: hi-vis / vector (replaces the v2 emblem system)

- **Mark:** three rings (the fronts: street, code, decision makers) whose arrows converge on one goal node. Geometry only (`brand/mark.svg`, `brand/mark-on-black.svg`), safe anywhere. At 24px and below, drop the arrowheads.
- **Colour:** `#E6FF00` hi-vis yellow is the brand and every action. `#0A0A0A` is ink, `#F4F4EF` is paper. `#FF3B30` means risk or finding and nothing else. On the web, `#7B3CFF` marks the street front, yellow the code front and `#2D4BFF` the decision-makers front. On GitHub the same colours mark the contribution branches: BUILD yellow, RESEARCH blue, COMMUNICATE violet. Use yellow plus black plus at most one signal colour per view.
- **Type:** Anybody (wide 900 caps for headlines, 400 for text) and IBM Plex Mono for labels, code and data. GitHub loads no webfonts, so any text-bearing art ships as PNG (`brand/profile-banner.png`).
- **Voice:** field orders. Short, imperative, honest numbers. Main line: "We provide the materials. You build an AI safe world." Method: Spot · Build · Hit. Rotating lines: real networks, a better world. The banner carries the main line. Never use any pull-requests-vs-letters line.
- **No emoji** anywhere. Use a badge label half instead.

## Badge grammar (v3)

- Every badge uses `style=flat-square&labelColor=0A0A0A`.
- The first badge is the branch and stage: BUILD `E6FF00`, RESEARCH `2D4BFF`, COMMUNICATE `7B3CFF`.
- The progress badge uses the branch colour.
- Checklist chips use `DONE` / `ACTIVE` / `OPEN` in `3A3A36`, and `RISK` in `FF3B30`.
- In project repos only, the umbrella badge comes last: `AI_SAFE_EARTH-build_research_communicate-0A0A0A`, linked to the org.
- `%` is written `%25` and `+` is written `%2B`.

## profile/README.md conventions

- Open with the banner image alone, with no H1. Put a `---` rule between sections. Never skip heading levels.
- The profile is for contributors. Audience paths ("pick your path") belong on the website, not here.
- Order: intro and lines, problem, three fronts, how we move, goal, then BUILD / RESEARCH / COMMUNICATE with their projects, civic tech, why, values, contributing, and the white paper last.
- Animated art sits in `profile/brand/art/*.gif`, with a static `.png` of each. GitHub art is on a white ground: ink text, yellow as a highlight block behind words, never as yellow text. The README uses animated GIFs, which play everywhere, including VS Code preview. The `_*.png` layers come from `README Art.dc.html`.
- Mark in-progress items `*(in progress)*`. The prose concepts are the founder's own words, so keep them.
- The footer is raw HTML `<sub>` with `·` separators, and `&` is written as `&amp;`.
- v2 assets (`logo/`, `projects/`, `banner.svg`) are deleted in the v3 PR. See `profile/brand/ROLLOUT.md` for the per-repo rollout.
- The full spec lives in `profile/brand/README.md`. Links, licence and version badges use `2D4BFF`.
