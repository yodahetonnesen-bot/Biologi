/* Kontrollerer at den bygde siden henger sammen. */
import { readdir, readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const dist = path.join(root, "dist");
const errors = [];
const warn = [];

const files = await readdir(dist);
const htmlFiles = files.filter((f) => f.endsWith(".html"));
if (htmlFiles.length < 20) errors.push(`For få HTML-filer: ${htmlFiles.length}`);

const idsByFile = {};
const linkRefs = [];

for (const f of htmlFiles) {
  const html = await readFile(path.join(dist, f), "utf8");

  /* Ubalanserte tagger på de viktigste elementene */
  for (const tag of ["html", "head", "body", "main", "header", "footer"]) {
    const open = (html.match(new RegExp(`<${tag}[\\s>]`, "g")) || []).length;
    const close = (html.match(new RegExp(`</${tag}>`, "g")) || []).length;
    if (open !== close) errors.push(`${f}: ulikt antall <${tag}> (${open}) og </${tag}> (${close})`);
  }

  /* Uparsede innholdsmarkører */
  if (/\*\*/.test(html.replace(/<script[\s\S]*?<\/script>/g, ""))) {
    warn.push(`${f}: inneholder ** som ikke ble konvertert til fet skrift`);
  }
  if (/undefined|\[object Object\]|NaN/.test(html.replace(/<script[\s\S]*?<\/script>/g, ""))) {
    errors.push(`${f}: inneholder undefined / [object Object] / NaN i synlig innhold`);
  }

  /* id-er */
  const ids = Array.from(html.matchAll(/\sid="([^"]+)"/g)).map((m) => m[1]);
  const dupes = ids.filter((id, i) => ids.indexOf(id) !== i);
  if (dupes.length) errors.push(`${f}: dupliserte id-er: ${[...new Set(dupes)].join(", ")}`);
  idsByFile[f] = new Set(ids);

  /* lenker og ressurser */
  for (const m of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const url = m[1];
    if (/^(https?:|mailto:|data:|#|\/)/.test(url)) {
      if (url.startsWith("#")) linkRefs.push({ from: f, file: f, hash: url.slice(1) });
      continue;
    }
    const [rawTarget, hash] = url.split("#");
    const target = rawTarget.split("?")[0];
    linkRefs.push({ from: f, file: target, hash });
  }
}

for (const ref of linkRefs) {
  const target = path.join(dist, ref.file);
  if (!existsSync(target)) {
    errors.push(`${ref.from}: lenker til ${ref.file}, som ikke finnes`);
    continue;
  }
  if (ref.hash && ref.file.endsWith(".html")) {
    if (!idsByFile[ref.file]?.has(ref.hash)) {
      errors.push(`${ref.from}: lenker til ${ref.file}#${ref.hash}, men id-en finnes ikke`);
    }
  }
}

/* Datafilene */
const readData = async (name, global) => {
  const js = await readFile(path.join(dist, "assets", name), "utf8");
  const json = js.replace(new RegExp(`^window\\.${global}=`), "").replace(/;$/, "");
  return JSON.parse(json);
};

const quiz = await readData("quiz-data.js", "BIO_QUIZ");
const cards = await readData("cards-data.js", "BIO_CARDS");
const index = await readData("search-index.js", "BIO_INDEX");

quiz.forEach((q, i) => {
  if (!Array.isArray(q.o) || q.o.length < 2) errors.push(`Quiz ${i}: for få svaralternativer`);
  if (typeof q.a !== "number" || q.a < 0 || q.a >= q.o.length) errors.push(`Quiz ${i}: ugyldig fasit (${q.a}) — "${q.q}"`);
  if (!q.q || !q.e) warn.push(`Quiz ${i}: mangler spørsmål eller forklaring`);
  if (new Set(q.o).size !== q.o.length) warn.push(`Quiz ${i}: like svaralternativer — "${q.q}"`);
});

const cardIds = cards.map((c) => c.id);
if (new Set(cardIds).size !== cardIds.length) errors.push("Flashcards har dupliserte id-er");
cards.forEach((c, i) => {
  if (!c.f || !c.b) errors.push(`Kort ${i}: mangler for- eller bakside`);
});

index.forEach((d, i) => {
  if (!d.u || !d.t) errors.push(`Søkeindeks ${i}: mangler URL eller tittel`);
  const [file, hash] = d.u.split("#");
  if (!existsSync(path.join(dist, file))) errors.push(`Søkeindeks: ${d.u} peker til en fil som ikke finnes`);
  else if (hash && !idsByFile[file]?.has(hash)) errors.push(`Søkeindeks: ${d.u} peker til en id som ikke finnes`);
});

console.log(`Sjekket ${htmlFiles.length} sider, ${linkRefs.length} lenker, ${quiz.length} quizspørsmål, ${cards.length} kort og ${index.length} søketreff.`);
if (warn.length) {
  console.log(`\n${warn.length} advarsler:`);
  warn.slice(0, 10).forEach((w) => console.log("  ! " + w));
}
if (errors.length) {
  console.log(`\n${errors.length} feil:`);
  errors.slice(0, 40).forEach((e) => console.log("  x " + e));
  process.exit(1);
}
console.log("\nAlt henger sammen.");
