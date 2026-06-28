# Color Lab

Een interactieve kleurentool waarmee je kleuren kunt kiezen, de bijbehorende code-uitvoer kunt bekijken, en kleurpaletten kunt verkennen.

## Functionaliteit

- **Color Picker** — kies een kleur via een visuele interface
- **Code Output** — bekijk de kleurwaarden als code (HEX, RGB, HSL, etc.)
- **Color Output** — zie een preview van de gekozen kleur en bijbehorend palet
- Donkere modus via systeeminstellingen

## Tech stack

- [Next.js 16](https://nextjs.org) — App Router
- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Phosphor Icons](https://phosphoricons.com)

## Lokaal starten

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in je browser.

## Projectstructuur

```
app/
  layout.tsx        # Root layout met font en metadata
  page.tsx          # Hoofdpagina
  globals.css       # Globale stijlen en CSS-variabelen
sections/
  nav.tsx           # Navigatiebalk
  name.tsx          # Titelsectie
  color_picker.tsx  # Kleurkiezer
  code_output.tsx   # Code-uitvoer van de gekozen kleur
  color_output.tsx  # Kleurpreview en paletsectie
```

## Scripts

| Commando        | Beschrijving              |
| --------------- | ------------------------- |
| `npm run dev`   | Start de dev-server       |
| `npm run build` | Bouw voor productie       |
| `npm run start` | Start de productie-server |
| `npm run lint`  | Voer ESLint uit           |
