import { icons } from "./icons.mjs";
import { figure } from "./figures.mjs";

/* ---------- små hjelpere ---------- */
export const esc = (s) =>
  String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

/* Tillater **fet**, *kursiv* og enkel HTML skrevet i innholdet. */
export const inline = (s) =>
  String(s)
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/(^|[\s(])\*([^*]+)\*(?=[\s.,;:)!?]|$)/g, "$1<em>$2</em>");

export const slugify = (s) =>
  String(s)
    .toLowerCase()
    .replace(/[æ]/g, "ae").replace(/[øö]/g, "o").replace(/[å]/g, "a")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

/* Ren tekst til søkeindeks */
export const plain = (s) => String(s).replace(/<[^>]*>/g, " ").replace(/\*\*/g, "").replace(/\s+/g, " ").trim();

/* ---------- blokker ---------- */
export function blocks(list) {
  return list.map((b) => {
    const [kind, ...rest] = b;
    switch (kind) {
      case "p":
        return `<p>${inline(rest[0])}</p>`;
      case "h":
        return `<h3>${inline(rest[0])}</h3>`;
      case "list":
        return `<ul>${rest[0].map((i) => `<li>${inline(i)}</li>`).join("")}</ul>`;
      case "olist":
        return `<ol>${rest[0].map((i) => `<li>${inline(i)}</li>`).join("")}</ol>`;
      case "key":
        return `<div class="callout"><div class="callout__label">${icons.key} Nøkkelpunkt</div><p>${inline(rest[0])}</p></div>`;
      case "note":
        return `<div class="callout callout--note"><div class="callout__label">${icons.info} ${esc(rest[0])}</div>${rest[1]
          .map((p) => `<p>${inline(p)}</p>`).join("")}</div>`;
      case "tip":
        return `<div class="callout callout--tip"><div class="callout__label">${icons.spark} ${esc(rest[0])}</div>${rest[1]
          .map((p) => `<p>${inline(p)}</p>`).join("")}</div>`;
      case "table": {
        const [head, rows, caption] = rest;
        return `<div class="table-wrap"><table><thead><tr>${head
          .map((h) => `<th scope="col">${inline(h)}</th>`).join("")}</tr></thead><tbody>${rows
          .map((r) => `<tr>${r.map((c, i) => (i === 0 ? `<th scope="row">${inline(c)}</th>` : `<td>${inline(c)}</td>`)).join("")}</tr>`)
          .join("")}</tbody>${caption ? `<caption>${inline(caption)}</caption>` : ""}</table></div>`;
      }
      case "steps":
        return `<div class="steps">${rest[0]
          .map(([t, d]) => `<div class="steps__item"><h4>${inline(t)}</h4><p>${inline(d)}</p></div>`).join("")}</div>`;
      case "compare":
        return `<div class="compare">${rest[0]
          .map(([t, items]) => `<div class="compare__col"><h4>${inline(t)}</h4><ul>${items
            .map((i) => `<li>${inline(i)}</li>`).join("")}</ul></div>`).join("")}</div>`;
      case "fig":
        return figure(rest[0], rest[1]);
      default:
        throw new Error("Ukjent blokktype: " + kind);
    }
  }).join("\n");
}

/* ---------- sidemal ---------- */
const NAV = [
  ["kapitler.html", "Kapitler"],
  ["begreper.html", "Begreper"],
  ["quiz.html", "Quiz"],
  ["sok.html", "Søk"]
];

export function layout({ title, description, active = "", body, head = "", scripts = "", bodyEnd = "" }) {
  const nav = NAV.map(([href, label]) =>
    `<a href="${href}"${active === href ? ' aria-current="page"' : ""}>${label}</a>`).join("");

  return `<!doctype html>
<html lang="nb" data-base="">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<meta name="color-scheme" content="light dark">
<meta name="theme-color" content="#1e6b45" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#0e1512" media="(prefers-color-scheme: dark)">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:type" content="website">
<meta property="og:locale" content="nb_NO">
<link rel="icon" href="assets/favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Newsreader:opsz,wght@6..72,500;6..72,600&display=swap">
<link rel="stylesheet" href="assets/styles.css">
<script>(function(){try{var t=localStorage.getItem("bio:theme");t=t?JSON.parse(t):null;if(!t)t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";document.documentElement.dataset.theme=t;}catch(e){document.documentElement.dataset.theme="light";}})();</script>
${head}
</head>
<body>
<a class="skip-link" href="#innhold">Hopp til innhold</a>
<div class="readbar" data-readbar></div>
<header class="header">
  <div class="wrap header__inner">
    <a class="brand" href="index.html">
      <span class="brand__mark">${icons.leaf}</span>
      <span>Biologi 1<small>Bios · studieside</small></span>
    </a>
    <nav class="nav" aria-label="Hovedmeny">${nav}</nav>
    <div class="header__tools">
      <button type="button" class="search-trigger" data-search-open aria-label="Søk på siden">
        ${icons.search}<span>Søk</span><kbd>⌘K</kbd>
      </button>
      <button type="button" class="icon-btn" data-theme-toggle aria-label="Bytt tema">
        <span class="theme-sun">${icons.sun}</span>
      </button>
      <button type="button" class="icon-btn menu-btn" data-menu-toggle aria-expanded="false" aria-controls="hovedmeny" aria-label="Åpne meny">
        ${icons.menu}
      </button>
    </div>
  </div>
  <div class="drawer" id="hovedmeny" data-open="false">
    <nav class="wrap" aria-label="Meny">${nav}</nav>
  </div>
</header>

<main id="innhold">
${body}
</main>

<footer class="footer">
  <div class="wrap footer__grid">
    <div>
      <h4>Om siden</h4>
      <p>Studieside for Biologi 1 i videregående skole. Sammendrag, begreper, repetisjonsspørsmål og quiz, bygd på læreplanen BIO01 og lærebokstoffet i Bios 1 (Cappelen Damm).</p>
    </div>
    <div>
      <h4>Innhold</h4>
      <ul>
        <li><a href="kapitler.html">Alle kapitler</a></li>
        <li><a href="begreper.html">Begreper</a></li>
        <li><a href="quiz.html">Quiz</a></li>
        <li><a href="sok.html">Søk</a></li>
      </ul>
    </div>
    <div>
      <h4>Deler</h4>
      <ul>
        <li><a href="kapitler.html#del-1">I Biologifaget</a></li>
        <li><a href="kapitler.html#del-2">II Cellebiologi</a></li>
        <li><a href="kapitler.html#del-3">III Anatomi og fysiologi</a></li>
        <li><a href="kapitler.html#del-4">IV Økologi</a></li>
      </ul>
    </div>
  </div>
  <div class="wrap footer__bottom">
    Laget som studiehjelp. Teksten er bearbeidet og forkortet av elever/lærere og erstatter ikke læreboka.
  </div>
</footer>

<div class="search-overlay" data-search-overlay data-open="false" role="dialog" aria-modal="true" aria-label="Søk">
  <div class="search-panel">
    <div class="search-panel__top">
      ${icons.search}
      <input class="search-input" type="search" data-search-input placeholder="Søk i kapitler og begreper…" autocomplete="off" spellcheck="false" aria-label="Søkeord">
      <button type="button" class="icon-btn" data-search-close aria-label="Lukk søk">${icons.close}</button>
    </div>
    <div class="search-results" data-search-results></div>
    <div class="search-foot"><span><kbd>↑</kbd><kbd>↓</kbd> bla</span><span><kbd>Enter</kbd> åpne</span><span><kbd>Esc</kbd> lukk</span></div>
  </div>
</div>

${scripts}
<script src="assets/app.js" defer></script>
${bodyEnd}
</body>
</html>`;
}

export { icons, figure };
