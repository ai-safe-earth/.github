# Identity rollout — status and remaining work

Where each repo stands against [the spec](./README.md). Run the outstanding items repo by
repo; nothing here depends on anything else.

## Status

| Repo | Point | Mark | Badge grammar | Footer | State |
|---|---|---|---|---|---|
| `.github` (profile) | — | banner PNG | ✅ | ✅ | done |
| `AI-Safe-Territory` | `#C4692A` | ✅ | ✅ | ✅ | done |
| `AI-Safety-Guardrails` | `#2E7D74` | ✅ | ✅ | ✅ | done |
| `UDO` | `#8A6D2F` | ✅ | ✅ | ✅ | done |
| `whitepaper` | `#C4692A` | ✅ | ✅ | ✅ | done |
| `laiive` | `#A63D6E` | ✗ | ✗ | ✗ | **outstanding** |
| `get-out-door` | `#4F7A3D` | ✗ | ✗ | ✗ | **outstanding** |

---

## laiive

The repo is the outlier furthest from the system. Remember the split: **this is the repo
surface, so it wears the emblem.** laiive's own brand belongs in the app UI, the store
listing and the product site — with an AI SAFE EARTH endorsement lockup there.

- [ ] **Resolve the remote first.** The local clone at `…\DIALOGOO\laiive` points at
      `OscarArroyoVega/laiive` on branch `connect-to-ui`, not at `ai-safe-earth/laiive`.
      Decide which is canonical before editing anything.
- [ ] Vendor `mark.svg` → `.github/brand/mark.svg`, place at 72px as the first line.
- [ ] Delete the two 9× repeated `user-attachments` PNG strips used as makeshift banners.
- [ ] Remove the 🫦 emoji used as a brand mark throughout — it is the mark of a project
      whose parent org bans emoji in its own kit.
- [ ] Add the badge row: `BUILD-GOING_TO_MARKET-A63D6E`, then licence
      (`LICENSE-APACHE_2.0-1F5D7A`), then the umbrella badge.
- [ ] Add the `<sub>` footer.
- [ ] Fix the heading jump — the README goes `#` straight to `####`, so there is no `##`
      level at all.
- [ ] Fix the dangling footnote reference `[^*]` (no definition) and the typo
      "comunication".
- [ ] Move the mockup/mission images in-repo. `user-attachments` URLs are tied to the
      uploading account and are not durable.
- [ ] Settle the title casing: the H1 says "Laiive.com", the body says "laiive".

## get-out-door

- [ ] Vendor `mark.svg` → `.github/brand/mark.svg` at 72px.
- [ ] Drop the 🏔️ emoji from the H1.
- [ ] Replace the four default-colour shields (`blue`, `green`, `teal`, `yellow` — none in
      the palette, and using `.svg` style rather than `flat-square`) with:
      `BUILD-IN_DEVELOPMENT-4F7A3D`, `PYTHON-3.11+-1F5D7A`, `NEO4J-5.X-1F5D7A`,
      `FASTAPI-0.110+-1F5D7A`, `LICENSE-MIT-1F5D7A`, then the umbrella badge.
- [ ] Add the `<sub>` footer.
- [ ] Fix the placeholder clone URL `https://github.com/your-org/get-out-door.git`.
- [ ] **Every `docs/…` link is broken** — `architecture.md`, `fragilities.md`,
      `query-examples.md`, `data-sources.md` sit in the repo root, not in `docs/`. Either
      move the files or fix the links.
- [ ] **Almost nothing is committed.** `git status` shows `??` for `architecture.md`,
      `CONTRIBUTING.md`, `LICENSE`, `docker-compose.yml` and more — only the README is
      tracked.

## Small fixes in the already-branded repos

- [ ] `UDO` — the README points at `docs/` for full design specs; no `docs/` directory
      exists in the repo.
- [ ] `AI-Safety-Guardrails` — the `#eu-ai-act-compliance` and `#nist-ai-rmf-compliance`
      badge anchors do not resolve. The real headings are `### EU AI Act (Regulation
      2024/1689)` and `### NIST AI RMF 1.0` under `## Policy Compliance`.

## Beyond GitHub

- [ ] No favicon is wired into any surface. `logo/ai-safe-earth-favicon-*.png` and
      `-512.svg` exist and are unused — worth adding to the AI-Safe-Territory Pages site,
      which is the only live site in the org.
- [ ] `AI-Safe-Territory` carries the only implemented theme (`brand-light.scss` /
      `brand-dark.scss`). If a second site appears, derive it from
      [`brand-tokens.css`](./brand-tokens.css) rather than re-typing hex values.
