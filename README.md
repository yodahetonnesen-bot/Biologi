# Biologi 1 — studieside

Statisk nettside med fagstoff, oppgaver med fasit, quiz og flashcards for Biologi 1 (BIO01), bygd på
lærestoffet i Bios 1.

| | |
|---|---|
| Kapitler | 14, fordelt på fire deler |
| Delkapitler med fagstoff | 74 |
| Begreper | 331 |
| Oppgaver med fasit | 474 (repetisjonsspørsmål, oppgaver og øvelsesspørsmål) |
| Øvelser | 32, med utstyrsliste, framgangsmåte og fasit |
| Quizspørsmål | 171, med forklaring på hvert svar |
| Flashcards | 599 |

## Sider

| Side | Innhold |
|---|---|
| `index.html` | Forside med framdriftsring og alle kapitlene gruppert i deler |
| `kapitler.html` | Kapitteloversikt |
| `kapittel-N.html` | Fagstoff, figurer, repetisjon, oppgaver, øvelser og quiz for ett kapittel |
| `oppgaver.html` | Alle oppgaver samlet, med filter på kapittel og type |
| `begreper.html` | Alle begreper, alfabetisk, med filter |
| `quiz.html` | Quiz for ett kapittel eller 15 tilfeldige spørsmål |
| `flashcards.html` | Flashcards med «kan det» / «øv mer». `?k=3` åpner kapittel 3 |
| `sok.html` | Søk i alt innhold. `/` eller `⌘K`/`Ctrl+K` åpner søket overalt |

Framdrift, quizresultater og hvilke flashcards du kan, lagres i nettleseren (`localStorage`). Ingen
innlogging, ingen sporing, ingen serverkode.

## Utvikling

Krever bare Node 18 eller nyere. Ingen avhengigheter.

```bash
npm run build     # bygger dist/
npm run verify    # bygger og kontrollerer lenker, id-er, quizfasit og søkeindeks
npm run dev       # bygger og starter http://localhost:8080
```

## Struktur

```
build.mjs              byggeskript: content/ -> dist/
content/site.mjs       tittel, beskrivelse og de fire delene
content/chapters/*.mjs ett kapittel per fil
src/render.mjs         sidemal og blokkrendering
src/figures.mjs        SVG-figurer som følger temaet
src/icons.mjs          ikonsett
src/styles.css         stilark med lyst og mørkt tema
src/app.js             søk, quiz, flashcards, filtre, framdrift og tema
scripts/verify.mjs     kontroll av den bygde siden
scripts/serve.mjs      lokal server
```

## Legge til eller endre innhold

Alt innhold ligger i `content/chapters/`. Et kapittel ser slik ut:

```js
export default {
  n: 15,
  slug: "nytt-kapittel",
  part: 4,                      // 1–4, se content/site.mjs
  title: "Tittel",
  lead: "Kort beskrivelse som vises på kortet og i søket.",
  goals: ["kompetansemål …"],
  sections: [
    { num: "15.1", title: "Overskrift", blocks: [
      ["p", "Avsnitt med **fet** og *kursiv* tekst."],
      ["list", ["punkt", "punkt"]],
      ["key", "Nøkkelpunkt som rammes inn."],
      ["note", "Fordypning", ["avsnitt", "avsnitt"]],
      ["table", ["Kolonne", "Kolonne"], [["rad", "rad"]], "Bildetekst"],
      ["steps", [["Steg", "forklaring"]]],
      ["compare", [["Venstre", ["punkt"]], ["Høyre", ["punkt"]]]],
      ["fig", "membran", "Figurtekst"]
    ]}
  ],
  terms: [["Begrep", "Forklaring"]],
  rep:   [["Repetisjonsspørsmål", "Fasit"]],
  tasks: [["15.1", "Oppgavetekst", "Løsningsforslag"]],
  labs:  [{ title: "Ø 15.1 Navn", aim: "Hensikt", equipment: [], steps: [], questions: [["Spørsmål", "Svar"]] }],
  quiz:  [["Spørsmål", ["a", "b", "c", "d"], 1, "Forklaring på riktig svar"]]
};
```

Tallet i quizen er indeksen til riktig svar (0 = første alternativ). Figurnavnene ligger i
`src/figures.mjs`: `hierarki`, `metode`, `domener`, `celler`, `membran`, `naeringskjede`,
`kretslop`, `nevron`, `nefron` og `suksesjon`.

Kjør `npm run verify` etterpå. Skriptet stopper på døde lenker, dupliserte id-er, quizfasit utenfor
rekkevidde og søketreff som peker feil.

## Publisering

`netlify.toml` er ferdig satt opp: byggkommando `node build.mjs`, publiseringsmappe `dist`. Koble
repoet til Netlify, eller legg innholdet i `dist/` på en hvilken som helst statisk vert. Sidene
fungerer også ved å åpne filene direkte i nettleseren.

## Kilde

Innholdet er bearbeidet og forkortet fra lærestoffet i Bios 1 (Cappelen Damm) og læreplanen for
BIO01. Siden er ment som studiehjelp og erstatter ikke læreboka.
