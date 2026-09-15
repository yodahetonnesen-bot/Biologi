/* Byggeskript: leser innhold fra content/ og skriver en statisk side til dist/ */
import { readdir, mkdir, writeFile, copyFile, readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { rm } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { site, parts } from "./content/site.mjs";
import { layout, blocks, esc, inline, slugify, plain, icons } from "./src/render.mjs";

const root = path.dirname(fileURLToPath(import.meta.url));
const dist = path.join(root, "dist");

/* ---------- last inn kapitler ---------- */
const dir = path.join(root, "content", "chapters");
const files = (await readdir(dir)).filter((f) => f.endsWith(".mjs")).sort();
const chapters = [];
for (const f of files) {
  const mod = await import(path.join(dir, f));
  chapters.push(mod.default);
}
chapters.sort((a, b) => a.n - b.n);

/* ---------- avledede data ---------- */
for (const ch of chapters) {
  ch.url = `kapittel-${ch.n}.html`;
  const used = new Set();
  for (const s of ch.sections) {
    let id = slugify(s.title);
    if (!id || used.has(id)) id = `${id || "del"}-${s.num.replace(/\./g, "-")}`;
    used.add(id);
    s.id = id;
  }
  ch.terms = ch.terms || [];
  ch.rep = ch.rep || [];
  ch.tasks = ch.tasks || [];
  ch.labs = ch.labs || [];
  ch.quiz = ch.quiz || [];
}

const totals = {
  chapters: chapters.length,
  sections: chapters.reduce((n, c) => n + c.sections.length, 0),
  terms: new Set(chapters.flatMap((c) => c.terms.map(([t]) => slugify(t)))).size,
  quiz: chapters.reduce((n, c) => n + c.quiz.length, 0),
  tasks: chapters.reduce((n, c) => n + c.rep.length + c.tasks.length, 0),
  labs: chapters.reduce((n, c) => n + c.labs.length, 0)
};
totals.cards = chapters.reduce((n, c) => n + c.terms.length + c.rep.length, 0);

const chapterOf = (n) => chapters.find((c) => c.n === n);
const termSlug = (t) => "b-" + slugify(t);

/* ---------- små byggeklosser ---------- */
const chipRow = (attr, all = "Alle kapitler") =>
  `<div class="chip-row" ${attr}>
    <button type="button" class="chip" data-ch="alle" data-active="true">${all}</button>
    ${chapters.map((c) => `<button type="button" class="chip" data-ch="${c.n}">${c.n}. ${esc(c.title)}</button>`).join("")}
  </div>`;

const qaItem = (q, a, num = "", extra = "") =>
  `<details${extra}><summary class="${num ? "with-num" : ""}">${num ? `<span class="tasknum">${esc(num)}</span>` : ""}<span class="sum-text">${inline(q)}</span><span class="sum-open">Fasit</span></summary><div class="qa__body">${a
    .split("\n").map((p) => `<p>${inline(p)}</p>`).join("")}</div></details>`;

const labBlock = (lab) => `
<div class="lab">
  <h3>${esc(lab.title)}</h3>
  <p class="lab__meta">${inline(lab.aim)}</p>
  ${lab.equipment?.length ? `<h4>Utstyr</h4><ul>${lab.equipment.map((e) => `<li>${inline(e)}</li>`).join("")}</ul>` : ""}
  ${lab.steps?.length ? `<h4>Framgangsmåte</h4><ol>${lab.steps.map((e) => `<li>${inline(e)}</li>`).join("")}</ol>` : ""}
  ${lab.questions?.length
      ? `<h4>Spørsmål med fasit</h4><div class="qa">${lab.questions.map(([q, a]) => qaItem(q, a)).join("")}</div>`
      : ""}
</div>`;

/* ---------- forside ---------- */
function pageHome() {
  const cards = parts.map((p) => {
    const list = chapters.filter((c) => c.part === p.n);
    return `
<section class="section section--tight" id="del-${p.n}">
  <div class="section-head">
    <span class="part-tag">${esc(p.roman)}</span>
    <h2>${esc(p.title)}</h2>
    <p>${esc(p.blurb)}</p>
  </div>
  <div class="grid grid--cards">
    ${list.map((c) => `
    <a class="card" href="${c.url}" data-chapter-card="${c.n}">
      <div class="card__top">
        <span class="card__num">${c.n}</span>
        <span class="badge" data-card-state>${c.sections.length} delkapitler</span>
      </div>
      <h3>${esc(c.title)}</h3>
      <p>${esc(c.lead)}</p>
      <div class="card__meta">
        <span>${c.terms.length} begreper</span><span class="dot"></span>
        <span>${c.rep.length + c.tasks.length} oppgaver</span><span class="dot"></span>
        <span>${c.quiz.length} quiz</span>
      </div>
    </a>`).join("")}
  </div>
</section>`;
  }).join("");

  const body = `
<section class="hero wrap">
  <div class="hero__grid">
    <div>
      <span class="eyebrow">${icons.dna} Biologi 1 · BIO01</span>
      <h1>Hele Biologi 1, samlet og ferdig strukturert</h1>
      <p class="lead">${totals.sections} delkapitler med fagstoff, ${totals.tasks} oppgaver med fasit, ${totals.quiz} quizspørsmål og ${totals.cards} flashcards. Alt på ett sted, uten innlogging.</p>
      <div class="hero__actions">
        <a class="btn btn--primary" href="kapittel-1.html">Start på kapittel 1 ${icons.arrow}</a>
        <a class="btn btn--ghost" href="flashcards.html">${icons.cards} Øv med flashcards</a>
      </div>
      <div class="stats">
        <div class="stat"><b>${totals.chapters}</b><span>kapitler</span></div>
        <div class="stat"><b>${totals.tasks}</b><span>oppgaver med fasit</span></div>
        <div class="stat"><b>${totals.terms}</b><span>begreper</span></div>
        <div class="stat"><b>${totals.quiz}</b><span>quizspørsmål</span></div>
      </div>
    </div>
    <div class="progress-card" data-progress-card data-total="${chapters.length}">
      <div class="progress-card__top">
        <div class="ring">
          <svg viewBox="0 0 100 100" aria-hidden="true">
            <circle class="ring__bg" cx="50" cy="50" r="42"></circle>
            <circle class="ring__fg" cx="50" cy="50" r="42" data-ring style="stroke-dasharray:264;stroke-dashoffset:264"></circle>
          </svg>
          <b data-ring-label>0%</b>
        </div>
        <div>
          <h2>Din framdrift</h2>
          <p data-progress-sum>Du har ikke markert noen kapitler ennå.</p>
        </div>
      </div>
      <div class="progress-card__list">
        <div class="mini-row" data-score-for="alle"><span>Beste quizresultat</span><span class="bar"><i style="width:0"></i></span><span data-score-val>–</span></div>
        <div class="mini-row"><span>Markér kapitler som lest mens du jobber – framdriften lagres i nettleseren din.</span></div>
      </div>
      <p style="margin:16px 0 0"><button type="button" class="btn btn--quiet btn--sm" data-progress-reset hidden>Nullstill framdrift</button></p>
    </div>
  </div>
</section>

<section class="section wrap">
  <div class="section-head"><h2>Fire måter å øve på</h2><p>Bruk dem sammen: les, test deg selv, og repeter det du bommer på.</p></div>
  <div class="tiles">
    <a class="tile" href="kapitler.html">
      <span class="tile__icon">${icons.book}</span>
      <div><h3>Fagstoff</h3><p>Alle ${totals.chapters} kapitlene med figurer, tabeller og nøkkelpunkt.</p></div>
    </a>
    <a class="tile" href="oppgaver.html">
      <span class="tile__icon">${icons.list}</span>
      <div><h3>Oppgaver med fasit</h3><p>Repetisjonsspørsmål, oppgaver og ${totals.labs} øvelser – svarene ligger skjult til du vil se dem.</p></div>
    </a>
    <a class="tile" href="quiz.html">
      <span class="tile__icon">${icons.quiz}</span>
      <div><h3>Quiz</h3><p>Flervalg med forklaring på hvert svar. Velg kapittel eller kjør 15 tilfeldige.</p></div>
    </a>
    <a class="tile" href="flashcards.html">
      <span class="tile__icon">${icons.cards}</span>
      <div><h3>Flashcards</h3><p>${totals.cards} kort. Snu kortet, marker «kan det» eller «øv mer».</p></div>
    </a>
  </div>
</section>

<div class="wrap">${cards}</div>`;

  return layout({
    title: `${site.title} — ${site.tagline}`,
    description: site.description,
    active: "",
    body
  });
}

/* ---------- kapitteloversikt ---------- */
function pageChapters() {
  const body = `
<section class="section wrap">
  <div class="section-head" style="flex-direction:column;align-items:flex-start;gap:8px">
    <h1>Alle kapitler</h1>
    <p>${totals.chapters} kapitler fordelt på fire deler. Klikk deg inn for fagstoff, repetisjon, oppgaver med fasit og quiz.</p>
  </div>
  ${parts.map((p) => `
  <section class="section section--tight" id="del-${p.n}">
    <div class="section-head"><span class="part-tag">${esc(p.roman)}</span><h2>${esc(p.title)}</h2><p>${esc(p.blurb)}</p></div>
    <div class="grid grid--cards">
      ${chapters.filter((c) => c.part === p.n).map((c) => `
      <a class="card" href="${c.url}" data-chapter-card="${c.n}">
        <div class="card__top"><span class="card__num">${c.n}</span><span class="badge" data-card-state>${c.sections.length} delkapitler</span></div>
        <h3>${esc(c.title)}</h3>
        <p>${esc(c.lead)}</p>
        <div class="card__meta"><span>${c.terms.length} begreper</span><span class="dot"></span><span>${c.rep.length + c.tasks.length} oppgaver</span></div>
      </a>`).join("")}
    </div>
  </section>`).join("")}
</section>`;
  return layout({ title: `Kapitler — ${site.title}`, description: "Oversikt over alle kapitlene i Biologi 1.", active: "kapitler.html", body });
}

/* ---------- kapittelside ---------- */
function pageChapter(ch) {
  const prev = chapterOf(ch.n - 1);
  const next = chapterOf(ch.n + 1);
  const part = parts.find((p) => p.n === ch.part);

  const toc = `
<nav class="toc" data-toc aria-label="Innhold i kapitlet">
  <h2>I dette kapitlet</h2>
  <ol>
    ${ch.sections.map((s) => `<li><a href="#${s.id}">${esc(s.title)}</a></li>`).join("")}
    ${ch.rep.length ? `<li><a href="#repetisjon">Repetisjon</a></li>` : ""}
    ${ch.tasks.length ? `<li><a href="#oppgaver">Oppgaver</a></li>` : ""}
    ${ch.labs.length ? `<li><a href="#ovelser">Øvelser</a></li>` : ""}
    ${ch.quiz.length ? `<li><a href="#quiz">Quiz</a></li>` : ""}
  </ol>
</nav>`;

  const sections = ch.sections.map((s) => `
<section id="${s.id}">
  <h2><span class="sec-num">${esc(s.num)}</span>${esc(s.title)} <a class="anchor" href="#${s.id}" aria-label="Lenke til ${esc(s.title)}">#</a></h2>
  ${blocks(s.blocks)}
</section>`).join("");

  const rep = ch.rep.length ? `
<section id="repetisjon" class="task-group">
  <div class="task-group__head"><h2>Repetisjon</h2><span class="badge">${ch.rep.length} spørsmål</span>
  <p>Svar først selv, sjekk så fasiten.</p></div>
  <div class="qa">${ch.rep.map(([q, a]) => qaItem(q, a)).join("")}</div>
</section>` : "";

  const tasks = ch.tasks.length ? `
<section id="oppgaver" class="task-group">
  <div class="task-group__head"><h2>Oppgaver</h2><span class="badge">${ch.tasks.length} oppgaver</span>
  <p>Oppgavene fra kapitlet med løsningsforslag.</p></div>
  <div class="qa">${ch.tasks.map(([num, q, a]) => qaItem(q, a, num)).join("")}</div>
</section>` : "";

  const labs = ch.labs.length ? `
<section id="ovelser" class="task-group">
  <div class="task-group__head"><h2>Øvelser</h2><span class="badge">${ch.labs.length} øvelser</span>
  <p>Praktisk arbeid med utstyrsliste, framgangsmåte og fasit.</p></div>
  ${ch.labs.map(labBlock).join("")}
</section>` : "";

  const quiz = ch.quiz.length ? `
<section id="quiz" class="task-group">
  <div class="task-group__head"><h2>Quiz</h2><span class="badge">${ch.quiz.length} spørsmål</span>
  <p>Tastene <kbd>1</kbd>–<kbd>4</kbd> velger svar.</p></div>
  <div class="quiz" data-quiz data-quiz-key="${ch.n}"></div>
</section>` : "";

  const body = `
<div class="wrap chapter-layout">
  ${toc}
  <div>
    <header class="chapter-head">
      <p class="crumbs"><a href="index.html">Hjem</a> / <a href="kapitler.html#del-${ch.part}">${esc(part.roman)} ${esc(part.title)}</a> / Kapittel ${ch.n}</p>
      <h1>${ch.n}. ${esc(ch.title)}</h1>
      <p class="lead">${esc(ch.lead)}</p>
      <div class="chapter-actions">
        <button type="button" class="btn btn--ghost" data-mark-read="${ch.n}" aria-pressed="false">
          ${icons.check}<span data-mark-label>Marker som lest</span>
        </button>
        ${ch.quiz.length ? `<a class="btn btn--quiet" href="#quiz">${icons.quiz} Til quizen</a>` : ""}
        <a class="btn btn--quiet" href="flashcards.html?k=${ch.n}">${icons.cards} Flashcards</a>
      </div>
    </header>

    ${ch.goals?.length ? `<div class="goals"><h2>Kompetansemål</h2><ul>${ch.goals.map((g) => `<li>${esc(g)}</li>`).join("")}</ul></div>` : ""}

    <article class="prose" data-article>
      ${sections}
      ${rep}
      ${tasks}
      ${labs}
      ${quiz}
    </article>

    <nav class="pager" aria-label="Neste og forrige kapittel">
      ${prev ? `<a href="${prev.url}"><small>Forrige</small><b>${prev.n}. ${esc(prev.title)}</b></a>` : `<a href="kapitler.html"><small>Oversikt</small><b>Alle kapitler</b></a>`}
      ${next ? `<a class="next" href="${next.url}"><small>Neste</small><b>${next.n}. ${esc(next.title)}</b></a>` : `<a class="next" href="quiz.html"><small>Neste steg</small><b>Ta quizen</b></a>`}
    </nav>
  </div>
</div>`;

  const quizData = ch.quiz.map(([q, o, a, e]) => ({ n: ch.n, c: `Kapittel ${ch.n}`, q, o, a, e, u: ch.url }));

  return layout({
    title: `${ch.n}. ${ch.title} — ${site.title}`,
    description: ch.lead,
    active: "kapitler.html",
    body,
    scripts: ch.quiz.length ? `<script>window.BIO_QUIZ=${JSON.stringify(quizData)};</script>` : ""
  });
}

/* ---------- oppgaver ---------- */
function pageTasks() {
  const groups = chapters.map((c) => {
    const rows = [];
    c.rep.forEach(([q, a], i) => rows.push({ type: "repetisjon", num: "", q, a, id: `r-${c.n}-${i}` }));
    c.tasks.forEach(([num, q, a], i) => rows.push({ type: "oppgave", num, q, a, id: `o-${c.n}-${i}` }));
    c.labs.forEach((lab, li) =>
      (lab.questions || []).forEach(([q, a], i) =>
        rows.push({ type: "ovelse", num: "Ø", q: `${lab.title}: ${q}`, a, id: `v-${c.n}-${li}-${i}` })));
    if (!rows.length) return "";
    return `
<section class="task-group" data-task-group>
  <div class="task-group__head"><h2>${c.n}. ${esc(c.title)}</h2>
    <a class="chip" href="${c.url}">Les kapitlet</a>
    <span class="badge">${rows.length} oppgaver</span></div>
  <div class="qa">
    ${rows.map((r) => `<div data-task="${esc((r.q + " " + r.a).toLowerCase())}" data-ch="${c.n}" data-type="${r.type}" id="${r.id}">
      ${qaItem(r.q, r.a, r.num || (r.type === "repetisjon" ? "Rep" : ""))}
    </div>`).join("")}
  </div>
</section>`;
  }).join("");

  const body = `
<section class="section wrap" data-tasks>
  <div class="section-head" style="flex-direction:column;align-items:flex-start;gap:8px">
    <h1>Oppgaver med fasit</h1>
    <p>Alle repetisjonsspørsmål, oppgaver og øvelser fra de ${totals.chapters} kapitlene. Klikk på en oppgave for å se løsningsforslaget.</p>
  </div>

  <div class="filter-bar">
    <label class="field">
      ${icons.search}
      <input type="search" data-task-search placeholder="Søk i oppgavene…" aria-label="Søk i oppgavene">
    </label>
    <button type="button" class="btn btn--ghost btn--sm" data-open-all data-state="closed">Vis alle svar</button>
    <span class="badge" data-task-count></span>
  </div>

  <div class="chip-row" data-task-type>
    <button type="button" class="chip" data-type="alle" data-active="true">Alle typer</button>
    <button type="button" class="chip" data-type="repetisjon">Repetisjon</button>
    <button type="button" class="chip" data-type="oppgave">Oppgaver</button>
    <button type="button" class="chip" data-type="ovelse">Øvelser</button>
  </div>
  ${chipRow("data-task-filter")}

  ${groups}
  <p class="empty-state" data-task-empty hidden>Ingen oppgaver passer til filteret.</p>
</section>`;

  return layout({ title: `Oppgaver med fasit — ${site.title}`, description: "Alle oppgaver og repetisjonsspørsmål i Biologi 1 med løsningsforslag.", active: "", body });
}

/* ---------- begreper ---------- */
function pageGlossary() {
  const seen = new Map();
  chapters.forEach((c) =>
    c.terms.forEach(([t, d]) => {
      const key = slugify(t);
      if (seen.has(key)) seen.get(key).refs.push(c);
      else seen.set(key, { t, d, refs: [c] });
    })
  );
  const all = [...seen.values()].sort((a, b) => a.t.localeCompare(b.t, "nb"));

  const body = `
<section class="section wrap">
  <div class="section-head" style="flex-direction:column;align-items:flex-start;gap:8px">
    <h1>Begreper</h1>
    <p>${all.length} fagbegreper fra hele Biologi 1, sortert alfabetisk.</p>
  </div>
  <div class="filter-bar">
    <label class="field">${icons.search}<input type="search" data-glossary-search placeholder="Søk etter begrep…" aria-label="Søk etter begrep"></label>
    <span class="badge" data-glossary-count></span>
  </div>
  ${chipRow("data-glossary-filter")}
  <div class="terms" data-glossary>
    ${all.map((x) => `
    <dl class="term" id="${termSlug(x.t)}" data-term="${esc((x.t + " " + x.d).toLowerCase())}" data-ch="${x.refs.map((c) => c.n).join(" ")}">
      <dt>${esc(x.t)}</dt>
      <dd>${inline(x.d)}</dd>
      ${x.refs.map((c) => `<a href="${c.url}">Kapittel ${c.n}</a>`).join(" ")}
    </dl>`).join("")}
  </div>
  <p class="empty-state" data-glossary-empty hidden>Ingen begreper passer til søket.</p>
</section>`;
  return layout({ title: `Begreper — ${site.title}`, description: "Alle fagbegreper i Biologi 1 med korte forklaringer.", active: "begreper.html", body });
}

/* ---------- quiz ---------- */
function pageQuiz() {
  const body = `
<section class="section wrap">
  <div class="section-head" style="flex-direction:column;align-items:flex-start;gap:8px">
    <h1>Quiz</h1>
    <p>${totals.quiz} flervalgsspørsmål. Velg «Alle kapitler» for 15 tilfeldige, eller ett kapittel for alle spørsmålene der. Tastene <kbd>1</kbd>–<kbd>4</kbd> svarer.</p>
  </div>
  ${chipRow("data-quiz-filter", "Alle kapitler (15 tilfeldige)")}
  <div class="quiz" data-quiz data-quiz-key="alle" data-quiz-limit="15"></div>
</section>`;
  return layout({
    title: `Quiz — ${site.title}`,
    description: "Test deg selv i Biologi 1 med flervalgsspørsmål og forklaringer.",
    active: "quiz.html",
    body,
    scripts: `<script src="assets/quiz-data.js"></script>`
  });
}

/* ---------- flashcards ---------- */
function pageCards() {
  const body = `
<section class="section wrap">
  <div class="section-head" style="flex-direction:column;align-items:flex-start;gap:8px">
    <h1>Flashcards</h1>
    <p>${totals.cards} kort med begreper og repetisjonsspørsmål. Snu kortet med <kbd>mellomrom</kbd>, svar med <kbd>1</kbd> (øv mer) eller <kbd>2</kbd> (kan det).</p>
  </div>
  ${chipRow("data-flash-filter")}
  <div class="flash" data-flash></div>
  <p style="margin-top:16px"><button type="button" class="btn btn--quiet btn--sm" data-flash-reset>Nullstill hvilke kort jeg kan</button></p>
</section>`;
  return layout({
    title: `Flashcards — ${site.title}`,
    description: "Øv på begreper og repetisjonsspørsmål i Biologi 1 med flashcards.",
    active: "",
    body,
    scripts: `<script src="assets/cards-data.js"></script>`
  });
}

/* ---------- søkeside ---------- */
function pageSearch() {
  const body = `
<section class="section wrap" data-search-page>
  <div class="section-head" style="flex-direction:column;align-items:flex-start;gap:8px">
    <h1>Søk</h1>
    <p>Søk i fagstoff, begreper og oppgaver. Du kan også trykke <kbd>/</kbd> eller <kbd>⌘K</kbd> hvor som helst på siden.</p>
  </div>
  <label class="field" style="max-width:520px">${icons.search}<input type="search" placeholder="For eksempel osmose, artsbegrep, nisje…" aria-label="Søkeord"></label>
  <div style="margin-top:28px" data-search-page-results></div>
</section>`;
  return layout({ title: `Søk — ${site.title}`, description: "Søk i alt innholdet i Biologi 1.", active: "sok.html", body });
}

function page404() {
  const body = `
<section class="section wrap" style="text-align:center;padding-block:96px">
  <h1>Fant ikke siden</h1>
  <p class="lead" style="margin:16px auto 32px;max-width:46ch">Lenken finnes ikke. Prøv kapitteloversikten eller søket.</p>
  <p><a class="btn btn--primary" href="index.html">Til forsiden</a> <a class="btn btn--ghost" href="kapitler.html">Alle kapitler</a></p>
</section>`;
  return layout({ title: `Siden finnes ikke — ${site.title}`, description: "Siden finnes ikke.", body });
}

/* ---------- datafiler ---------- */
function searchIndex() {
  const out = [];
  const termSeen = new Set();
  chapters.forEach((c) => {
    out.push({ u: c.url, t: `${c.n}. ${c.title}`, c: `Kapittel ${c.n}`, k: "Kapittel", b: plain(c.lead) });
    c.sections.forEach((s) => {
      const text = plain(blocks(s.blocks)).slice(0, 1400);
      out.push({ u: `${c.url}#${s.id}`, t: s.title, c: `Kapittel ${c.n}: ${c.title}`, k: "Fagstoff", b: text });
    });
    c.terms.forEach(([t, d]) => {
      const key = slugify(t);
      if (termSeen.has(key)) return;
      termSeen.add(key);
      out.push({ u: `begreper.html#${termSlug(t)}`, t, c: `Begrep · kapittel ${c.n}`, k: "Begrep", b: plain(d) });
    });
    c.rep.forEach(([q, a], i) => out.push({ u: `oppgaver.html#r-${c.n}-${i}`, t: plain(q), c: `Repetisjon · kapittel ${c.n}`, k: "Oppgave", b: plain(a) }));
    c.tasks.forEach(([num, q, a], i) => out.push({ u: `oppgaver.html#o-${c.n}-${i}`, t: `Oppgave ${num}`, c: `Kapittel ${c.n}: ${c.title}`, k: "Oppgave", b: plain(q + " " + a) }));
  });
  return `window.BIO_INDEX=${JSON.stringify(out)};`;
}

function quizData() {
  const out = [];
  chapters.forEach((c) => c.quiz.forEach(([q, o, a, e]) =>
    out.push({ n: c.n, c: `Kapittel ${c.n}`, q, o, a, e, u: c.url })));
  return `window.BIO_QUIZ=${JSON.stringify(out)};`;
}

function cardsData() {
  const out = [];
  chapters.forEach((c) => {
    c.terms.forEach(([t, d], i) =>
      out.push({ id: `t${c.n}-${i}`, n: c.n, c: `Kapittel ${c.n}`, k: "Begrep", f: t, b: plain(d), u: c.url }));
    c.rep.forEach(([q, a], i) =>
      out.push({ id: `r${c.n}-${i}`, n: c.n, c: `Kapittel ${c.n}`, k: "Repetisjon", f: plain(q), b: plain(a), u: c.url }));
  });
  return `window.BIO_CARDS=${JSON.stringify(out)};`;
}

const favicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
<rect width="32" height="32" rx="8" fill="#1e6b45"/>
<path d="M25 6c0 10.5-6 16.6-13.6 17.3V27H9v-3.7C9.3 14.8 15 9.2 25 6Zm-11.6 14.2C18.3 18.7 21.5 14.6 22.2 9.5c-6.6 2.3-10.6 6.5-11.4 11.5Z" fill="#fff"/>
</svg>`;

/* ---------- skriv ut ---------- */
await rm(dist, { recursive: true, force: true });
await mkdir(path.join(dist, "assets"), { recursive: true });

const write = async (rel, content) => {
  await writeFile(path.join(dist, rel), content, "utf8");
};

await write("index.html", pageHome());
await write("kapitler.html", pageChapters());
for (const ch of chapters) await write(ch.url, pageChapter(ch));
await write("oppgaver.html", pageTasks());
await write("begreper.html", pageGlossary());
await write("quiz.html", pageQuiz());
await write("flashcards.html", pageCards());
await write("sok.html", pageSearch());
await write("404.html", page404());

await copyFile(path.join(root, "src", "styles.css"), path.join(dist, "assets", "styles.css"));
await copyFile(path.join(root, "src", "app.js"), path.join(dist, "assets", "app.js"));
await write("assets/favicon.svg", favicon);
await write("assets/search-index.js", searchIndex());
await write("assets/quiz-data.js", quizData());
await write("assets/cards-data.js", cardsData());

const urls = ["index.html", "kapitler.html", "oppgaver.html", "begreper.html", "quiz.html", "flashcards.html", "sok.html"]
  .concat(chapters.map((c) => c.url));
await write("sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  urls.map((u) => `  <url><loc>${site.url}/${u}</loc></url>`).join("\n") + `\n</urlset>\n`);
await write("robots.txt", `User-agent: *\nAllow: /\nSitemap: ${site.url}/sitemap.xml\n`);

console.log(
  `Bygget dist/ · ${totals.chapters} kapitler · ${totals.sections} delkapitler · ` +
  `${totals.terms} begreper · ${totals.tasks} oppgaver · ${totals.labs} øvelser · ` +
  `${totals.quiz} quizspørsmål · ${totals.cards} flashcards`
);
