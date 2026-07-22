# Uzbek Recipes

A static website sharing traditional Uzbek and Central Asian recipes, along with the cultural context behind them

## Features

- **Home page** — an introduction to Uzbek cuisine: its roots in medieval Persian cuisine and nomadic Turkic traditions, the central role of tea in hospitality, and an overview of staple foods like bread (*non*) and the national dish, *plov*.
- **Recipes** (`recipes.html` / `recipe.html`) — individual recipe pages populated from `recipes.json`, covering ingredients and preparation for traditional dishes.
- **Shared navigation** (`nav.html`, `nav.js`) — a consistent nav bar injected across pages.

## Tech stack

- HTML/CSS/JavaScript
- Tailwind CSS (via CDN and `tailwind.config.js`) for styling
- Google Fonts (Pacifico) for display type

## Project structure

```
uzbek-recipes/
├── index.html            # Home page: intro to Uzbek cuisine and culture
├── recipes.html           # Recipe listing page
├── recipe.html             # Individual recipe detail page
├── recipes.json            # Recipe data (ingredients, steps, etc.)
├── nav.html                 # Shared navigation markup
├── nav.js                    # Injects nav.html into each page
├── css.css                    # Custom styles
├── cupimg.jpeg                 # Image asset
└── tailwind.config.js            # Tailwind configuration
```
