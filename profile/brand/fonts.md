# AI SAFE EARTH — fonts (v2)

Two families, both free and open-source. **There is no monospace in this system** —
the technical voice comes from letterspaced grotesk caps, not from code type.

## The system

| Role | Family | Weights | Notes |
|---|---|---|---|
| **The institution** | Archivo | 400 / 500 / 600 / 700 | Headings, labels, the wordmark. Uppercase and letterspaced for kickers and seals. |
| **The argument** | Spectral | 400 / 500 / 600, italic 400 | Running prose. The book, the whitepaper, any sustained reading. |

The pairing is deliberate: a grotesk that reads as a public institution, and a serif that
reads as a document rather than a landing page.

## HTML

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700&family=Spectral:ital,wght@0,400;0,500;0,600;1,400&display=swap" rel="stylesheet">
```

## CSS

```css
@import url('https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700&family=Spectral:ital,wght@0,400;0,500;0,600;1,400&display=swap');
```

## Fallbacks

SVG rendered by GitHub and most document pipelines cannot load a webfont, so every
logo file declares a fallback chain that degrades to another grotesk:

```xml
font-family="Archivo, 'Helvetica Neue', Helvetica, Arial, sans-serif"
```

## Download

- Archivo — https://fonts.google.com/specimen/Archivo
- Spectral — https://fonts.google.com/specimen/Spectral
