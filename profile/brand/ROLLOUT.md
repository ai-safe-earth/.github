# Brand v3 rollout: status and remaining work

This tracks where each surface stands against [the spec](./README.md). Every row is independent, so run them repo by repo, one PR each.

## Status

| Surface | Branch | Mark | Badges v3 | Take-an-action | Footer | State |
|---|---|---|---|---|---|---|
| `.github` (profile) | all | banner PNG | ✗ | ✗ | ✗ | **this PR** |
| `AI-Safe-Territory` | RESEARCH | ✗ | ✗ | ✗ | ✗ | outstanding |
| `AI-Safety-Guardrails` (AISG) | BUILD | ✗ | ✗ | ✗ | ✗ | outstanding |
| `laiive` | BUILD | ✗ | ✗ | ✗ | ✗ | outstanding |
| `VaiVia` | BUILD | ✗ | ✗ | ✗ | ✗ | outstanding |
| `whitepaper` | independent | ✗ | ✗ | ✗ | ✗ | outstanding |
| AI Safety for Community Leaders | COMMUNICATE | ✗ | ✗ | ✗ | ✗ | repo not yet created |

## `.github` (this PR)

- [ ] Replace `profile/README.md`, `profile/brand/README.md`, `brand-tokens.css`, `brand-palette.json`, `fonts.md`, `ROLLOUT.md` and `CLAUDE.md`.
- [ ] Add `mark.svg`, `mark-yellow.svg`, `mark-on-black.svg`, `favicon-small.svg`, `favicon-{16,32,180,512}.png`, `mark-*-1024.png`, and the new `profile-banner.png`.
- [ ] Update `.claude/skills/badge` and `.claude/skills/brand-check` to v3.
- [ ] Delete the v2 assets: all of `profile/brand/logo/`, all of `profile/brand/projects/`, and `profile/brand/banner.svg`.
- [ ] Set the org avatar to `favicon-512.png` (GitHub → org settings → profile picture).

## Every project repo

- [ ] Vendor `mark.svg` → `.github/brand/mark.svg` and place it at 56px on the first line.
- [ ] Replace the badge row with the v3 grammar: branch colour first, `RISK` in red, umbrella last.
- [ ] Add a **Take an action** section near the top, with one line each for a developer, a contributor and anyone else.
- [ ] Add the v3 `<sub>` footer.
- [ ] Remove any v2 point colours (`C4692A`, `2E7D74`, `8A6D2F`, `A63D6E`, `4F7A3D`) and `labelColor=131A21`.

## Carried over from v2, still open

- [ ] `laiive`: resolve the remote (`OscarArroyoVega/laiive` vs `ai-safe-earth/laiive`), remove the emoji brand mark, fix the heading jump, and move the `user-attachments` images into the repo.
- [ ] `VaiVia`: fix the placeholder clone URL, the broken `docs/…` links, and the untracked files.
- [ ] `AI-Safety-Guardrails`: the `#eu-ai-act-compliance` and `#nist-ai-rmf-compliance` anchors don't resolve.

## Beyond GitHub

- [ ] Wire the `favicon-*.png` files into the AI-Safe-Territory Pages site.
- [ ] Re-theme `brand-light.scss` / `brand-dark.scss` in AI-Safe-Territory from `brand-tokens.css`, using black as the default and paper for reading.
- [ ] Landing site: build it from the `AI SAFE EARTH Landing` design, with black as the default ground.

## Out of the profile

- `UDO`, `lei` and the AI Safe Earth Map are no longer listed on the org profile. The audit skill ships inside AISG (`AI-Safety-Guardrails`).
- UDO and lei Their repos keep their own READMEs, and v3 badges are optional there.
