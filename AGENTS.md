# Spirit Path Light - Project Configuration

## Project Overview

## Technology Stack

## Key Features

## Development Commands

## Project Structure

```text
spirit-path-light/
├── src/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   └── styles/
├── public/
├── myCrm/
│   ├── schemas/
│   └── studio/
├── astro.config.mjs
├── tailwind.config.js
├── daisyui.config.js
└── package.json
```

## Design System

### Palette Naturelle (Zen)

- **Verts doux** : #4a6b4e (primary)
- **Dorés lumineux** : #e6c97a (secondary)
- **Tons terreux** : #bfa980 (accent)
- **Fond neutre** : #f5f5f5
- **Texte** : #333333

### Ambiance & Style

- **Ambiance** : Zen, apaisante, naturelle
- **Gradients subtils** :
  - `bg-zen-gradient` : linear-gradient(135deg, #4a6b4e 0%, #e6c97a 100%)
  - `bg-earth-gradient` : linear-gradient(120deg, #bfa980 0%, #e6c97a 100%)
- **Typographie élégante et moderne** :
  - Sans-serif : Inter, Montserrat
  - Display : Playfair Display
- **Animations douces et organiques** :
  - `fade-in` : apparition progressive
  - `slide-in` : glissement vertical doux

### Utilisation du thème DaisyUI

- Thème personnalisé : `paletteNaturelle` (voir `daisyui.config.js`)
- Pour appliquer : `data-theme="paletteNaturelle"` sur `<html>` ou `<body>`
