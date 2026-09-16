/* Bygger hele nettstedet til én enkelt HTML-fil: standalone/biologi-1.html
   Kjør etter build.mjs. Filen fungerer uten server, uten bygg og uten avhengigheter. */
import { readFile, writeFile, mkdir, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));
const dist = path.join(root, "dist");
const out = path.join(root, "standalone");

const read = (p) => readFile(path.join(dist, p), "utf8");

/* Gjør alle lenker om til hash-ruter: kapittel-3.html#quiz -> #/kapittel-3~quiz */
function rewrite(html, self) {
  return html
    .replace(/href="([a-z0-9-]+)\.html(?:\?k=(\d+))?(?:#([a-z0-9-]+))?"/gi, (_, page, k, hash) => {
      const suffix = k ? "~k" + k : hash ? "~" + hash : "";
      return `href="#/${page}${suffix}"`;
    })
    .replace(/href="#([a-z0-9-]+)"/gi, (_, hash) => `href="#/${self}~${hash}"`);
}

const files = (await readdir(dist)).filter((f) => f.endsWith(".html"));
const pages = {};
const titles = {};

for (const f of files) {
  const name = f.replace(/\.html$/, "");
  const html = await read(f);
  const start = html.indexOf('<main id="innhold">');
  const end = html.indexOf("</main>");
  if (start === -1 || end === -1) continue;
  pages[name] = rewrite(html.slice(start + '<main id="innhold">'.length, end).trim(), name);
  titles[name] = (html.match(/<title>([^<]*)<\/title>/) || [, "Biologi 1"])[1];
}

/* Skallet: header, footer og søkeoverlegg fra forsiden */
const index = await read("index.html");
const shellStart = index.indexOf("<body>") + "<body>".length;
const shellEnd = index.indexOf("</body>");
let shell = index.slice(shellStart, shellEnd);
shell = shell.replace(/<main id="innhold">[\s\S]*?<\/main>/, '<main id="innhold"></main>');
shell = shell.replace(/<script src="assets\/app\.js" defer><\/script>/, "");
shell = rewrite(shell, "index");

const css = await read("assets/styles.css");
const app = await read("assets/app.js");

const strip = (js, name) => js.replace(new RegExp(`^window\\.${name}=`), "").replace(/;\s*$/, "");
const searchIndex = JSON.parse(strip(await read("assets/search-index.js"), "BIO_INDEX"))
  .map((d) => {
    const [file, hash] = d.u.split("#");
    return { ...d, u: `#/${file.replace(/\.html$/, "")}${hash ? "~" + hash : ""}` };
  });
const quiz = JSON.parse(strip(await read("assets/quiz-data.js"), "BIO_QUIZ"))
  .map((q) => ({ ...q, u: `#/${q.u.replace(/\.html$/, "")}` }));
const cards = JSON.parse(strip(await read("assets/cards-data.js"), "BIO_CARDS"))
  .map((c) => ({ ...c, u: `#/${c.u.replace(/\.html$/, "")}` }));

const favicon =
  "data:image/svg+xml," +
  encodeURIComponent(await read("assets/favicon.svg"));

const router = `
(function () {
  var main = document.getElementById("innhold");
  var nav = Array.prototype.slice.call(document.querySelectorAll(".nav a, .drawer a"));

  function route() {
    var raw = (location.hash || "#/index").replace(/^#\\/?/, "") || "index";
    var parts = raw.split("~");
    var page = parts[0] || "index";
    var anchor = parts[1] || "";
    if (!BIO_PAGES[page]) page = "404";

    main.innerHTML = BIO_PAGES[page];
    document.title = BIO_TITLES[page] || "Biologi 1";

    nav.forEach(function (a) {
      var href = a.getAttribute("href") || "";
      if (href === "#/" + page) a.setAttribute("aria-current", "page");
      else a.removeAttribute("aria-current");
    });

    var drawer = document.getElementById("hovedmeny");
    if (drawer) drawer.setAttribute("data-open", "false");

    window.BIO_BOOT_PAGE();

    if (anchor && !/^k\\d+$/.test(anchor)) {
      var el = document.getElementById(anchor);
      if (el) { el.scrollIntoView(); return; }
    }
    window.scrollTo(0, 0);
  }

  window.BIO_ROUTER = route;
  window.addEventListener("hashchange", route);
})();`;

const html = `<!doctype html>
<html lang="nb" data-base="">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>Biologi 1 — fagstoff, oppgaver med fasit, quiz og flashcards</title>
<meta name="description" content="Hele Biologi 1 i én fil: fagstoff, oppgaver med fasit, quiz og flashcards.">
<meta name="color-scheme" content="light dark">
<meta name="theme-color" content="#1e6b45" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#0e1512" media="(prefers-color-scheme: dark)">
<link rel="icon" href="${favicon}" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Newsreader:opsz,wght@6..72,500;6..72,600&display=swap">
<script>(function(){try{var t=localStorage.getItem("bio:theme");t=t?JSON.parse(t):null;if(!t)t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";document.documentElement.dataset.theme=t;}catch(e){document.documentElement.dataset.theme="light";}})();</script>
<style>
${css}
</style>
</head>
<body>
${shell}
<script>
window.BIO_SINGLE = true;
window.BIO_PAGES = ${JSON.stringify(pages)};
window.BIO_TITLES = ${JSON.stringify(titles)};
window.BIO_INDEX = ${JSON.stringify(searchIndex)};
window.BIO_QUIZ = ${JSON.stringify(quiz)};
window.BIO_CARDS = ${JSON.stringify(cards)};
</script>
<script>
${app}
</script>
<script>
${router}
</script>
</body>
</html>
`;

await mkdir(out, { recursive: true });
await writeFile(path.join(out, "biologi-1.html"), html, "utf8");

const kb = (n) => (n / 1024).toFixed(0) + " kB";
console.log(
  `Skrev standalone/biologi-1.html (${kb(Buffer.byteLength(html))}) med ${Object.keys(pages).length} sider, ` +
  `${quiz.length} quizspørsmål, ${cards.length} kort og ${searchIndex.length} søketreff.`
);
