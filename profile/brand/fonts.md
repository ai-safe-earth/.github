# AI SAFE EARTH fonts (v3)

There are two families, both free and SIL OFL. There is no third.

| Role | Family | Weights | Notes |
|---|---|---|---|
| Headlines + wordmark | **Anybody** (variable, width axis) | 900 | caps, 120–130% width, tight tracking |
| Text | **Anybody** | 400, 600 | sentence case, 1.5 leading |
| Labels, code, data, badges | **IBM Plex Mono** | 400, 500, 600 | times, counts, commands, diffs |

## HTML

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Anybody:ital,wdth,wght@0,50..150,400..900;1,50..150,400..900&family=IBM+Plex+Mono:wght@400;500;600&display=swap" rel="stylesheet">
```

## Width axis

```css
font-family: "Anybody", sans-serif;
font-weight: 900;
font-stretch: 122%;   /* 130% for the wordmark */
```

## Fallbacks

GitHub and most document pipelines load no webfonts. Text-bearing art ships as PNG. In CSS:

```css
font-family: "Anybody", "Helvetica Neue", Helvetica, Arial, sans-serif;
font-family: "IBM Plex Mono", ui-monospace, SFMono-Regular, monospace;
```

## Download

- Anybody: https://fonts.google.com/specimen/Anybody
- IBM Plex Mono: https://fonts.google.com/specimen/IBM+Plex+Mono
