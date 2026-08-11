---
name: badge
description: Build or fix a shields.io badge row that conforms to the AI SAFE EARTH badge grammar. Use when adding or updating a project's badges in profile/README.md or in any ai-safe-earth project repo README. Takes a project name and optional stage/checklist items as arguments.
---

Build a badge row for `$ARGUMENTS`. If the project or context is unclear, ask before emitting anything.

## Always

- `style=flat-square` and `labelColor=131A21` on every badge, no exceptions.
- Label text is `UPPER_SNAKE` — underscores for spaces.
- URL-encode: `%` becomes `%25`.
- **No emoji.** Ever. Use a label half instead.
- The whole row is a single line of space-separated `![alt](url)` images, placed directly under the heading it belongs to.
- Alt text is human sentence case, e.g. `![Stage: build, going to market]`.

## Colour by badge role

| Badge | Colour |
|---|---|
| Pillar / stage — always **first** | the project point (below), whatever the stage |
| Progress percentage | the project point |
| Links, licence, language, version | `1F5D7A` |
| Metadata, standards, checklist chips | `4A5560` |
| Umbrella — always **last** | `131A21` |

## Project points

| Project | Point |
|---|---|
| AI Safe Territory | `C4692A` |
| AI Safety Guardrails | `2E7D74` |
| UDO | `8A6D2F` |
| laiive | `A63D6E` |
| get-out-door | `4F7A3D` |
| whitepaper / org-level | `C4692A` |

## Vocabulary

- Stage, in order: `CONCEPT` · `EARLY_STAGE` · `IN_DEVELOPMENT` · `IN_PROGRESS` · `GOING_TO_MARKET` · `LIVE`
- Pillar: `RESEARCH` · `COMMUNICATE` · `BUILD`
- Checklist label halves: `DONE` · `ACTIVE` · `OPEN` · `RISK`

## Two contexts — pick the right one

**Org profile (`profile/README.md` in this repo):** no umbrella badge. This page *is* the umbrella. Row shape:

```
![Stage: build, going to market](https://img.shields.io/badge/BUILD-GOING_TO_MARKET-A63D6E?style=flat-square&labelColor=131A21) ![Progress: 80%](https://img.shields.io/badge/PROGRESS-80%25-A63D6E?style=flat-square&labelColor=131A21) ![Done: backend built](https://img.shields.io/badge/DONE-backend_built-4A5560?style=flat-square&labelColor=131A21) ![Active: GTM in progress](https://img.shields.io/badge/ACTIVE-GTM_in_progress-4A5560?style=flat-square&labelColor=131A21) ![Open: launch pending](https://img.shields.io/badge/OPEN-launch_pending-4A5560?style=flat-square&labelColor=131A21)
```

Order: pillar/stage, progress, then checklist chips grouped `DONE` → `ACTIVE` → `RISK` → `OPEN`.

**A project repo README:** umbrella badge always last, and it is a link.

```
![Pillar](https://img.shields.io/badge/<PILLAR>-<STAGE>-<point>?style=flat-square&labelColor=131A21)
[![Umbrella](https://img.shields.io/badge/AI_SAFE_EARTH-open_umbrella-131A21?style=flat-square&labelColor=131A21)](https://github.com/ai-safe-earth)
```

## Before finishing

Re-read the row against `profile/brand/README.md` "Badge grammar" — it is the source of truth and may have moved on. Report any rule there that this skill contradicts rather than silently following the skill.
