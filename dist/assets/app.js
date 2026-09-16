/* Biologi 1 — klientlogikk. Ingen avhengigheter. */
(function () {
  "use strict";

  var LS = {
    read: "bio:v1:read",
    theme: "bio:theme",
    score: "bio:v1:score"
  };

  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  function store(key, fallback) {
    try {
      var raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) { return fallback; }
  }
  function save(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { /* privat modus */ }
  }

  function link(page) {
    return window.BIO_SINGLE ? "#/" + page : page + ".html";
  }

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  var toastEl = null;
  function toast(msg) {
    if (!toastEl) {
      toastEl = document.createElement("div");
      toastEl.className = "toast";
      toastEl.setAttribute("role", "status");
      document.body.appendChild(toastEl);
    }
    toastEl.textContent = msg;
    toastEl.setAttribute("data-show", "true");
    clearTimeout(toastEl._t);
    toastEl._t = setTimeout(function () { toastEl.setAttribute("data-show", "false"); }, 2200);
  }

  /* ---------- Tema ---------- */
  function initTheme() {
    var btn = $("[data-theme-toggle]");
    if (!btn) return;
    function label() {
      var dark = document.documentElement.dataset.theme === "dark";
      btn.setAttribute("aria-label", dark ? "Bytt til lyst tema" : "Bytt til mørkt tema");
      btn.setAttribute("title", dark ? "Lyst tema" : "Mørkt tema");
    }
    label();
    btn.addEventListener("click", function () {
      var next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = next;
      save(LS.theme, next);
      label();
    });
  }

  /* ---------- Meny ---------- */
  function initMenu() {
    var btn = $("[data-menu-toggle]");
    var drawer = $("#hovedmeny");
    if (!btn || !drawer) return;
    btn.addEventListener("click", function () {
      var open = drawer.getAttribute("data-open") === "true";
      drawer.setAttribute("data-open", open ? "false" : "true");
      btn.setAttribute("aria-expanded", open ? "false" : "true");
    });
  }

  /* ---------- Leseprogresjon + innholdsfortegnelse ---------- */
  function initReading() {
    var article = $("[data-article]");
    var bar = $("[data-readbar]");
    if (article && bar) {
      var tick = false;
      var update = function () {
        var rect = article.getBoundingClientRect();
        var total = rect.height - window.innerHeight;
        var done = total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : (rect.top <= 0 ? 1 : 0);
        bar.style.width = (done * 100).toFixed(1) + "%";
        tick = false;
      };
      window.addEventListener("scroll", function () {
        if (!tick) { tick = true; requestAnimationFrame(update); }
      }, { passive: true });
      window.addEventListener("resize", update);
      update();
    }

    var links = $$("[data-toc] a");
    if (!links.length || !("IntersectionObserver" in window)) return;
    var map = {};
    links.forEach(function (a) {
      var id = a.getAttribute("href").split("#")[1];
      if (id) map[id] = a;
    });
    var visible = {};
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { visible[e.target.id] = e.isIntersecting; });
      var current = null;
      $$("[data-article] section[id]").forEach(function (s) {
        if (visible[s.id] && !current) current = s.id;
      });
      links.forEach(function (a) { a.removeAttribute("aria-current"); });
      if (current && map[current]) map[current].setAttribute("aria-current", "true");
    }, { rootMargin: "-15% 0px -70% 0px", threshold: 0 });
    $$("[data-article] section[id]").forEach(function (s) { obs.observe(s); });
  }

  /* ---------- Framdrift ---------- */
  function readList() {
    var v = store(LS.read, []);
    return Array.isArray(v) ? v : [];
  }

  function initProgressButton() {
    var btn = $("[data-mark-read]");
    if (!btn) return;
    var n = Number(btn.getAttribute("data-mark-read"));
    function paint() {
      var done = readList().indexOf(n) !== -1;
      btn.setAttribute("aria-pressed", done ? "true" : "false");
      btn.classList.toggle("btn--primary", done);
      btn.classList.toggle("btn--ghost", !done);
      $("[data-mark-label]", btn).textContent = done ? "Lest" : "Marker som lest";
    }
    paint();
    btn.addEventListener("click", function () {
      var list = readList();
      var i = list.indexOf(n);
      if (i === -1) { list.push(n); toast("Kapittel " + n + " markert som lest"); }
      else { list.splice(i, 1); toast("Markering fjernet"); }
      save(LS.read, list);
      paint();
    });
  }

  function initProgressCard() {
    var card = $("[data-progress-card]");
    var total = Number((card && card.getAttribute("data-total")) || 0);
    var list = readList();

    $$("[data-chapter-card]").forEach(function (el) {
      var n = Number(el.getAttribute("data-chapter-card"));
      var badge = $("[data-card-state]", el);
      if (!badge) return;
      if (list.indexOf(n) !== -1) {
        badge.className = "badge badge--done";
        badge.innerHTML = '<svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M8.1 14.3 4 10.2l1.4-1.4 2.7 2.7 6.5-6.5L16 6.4z"/></svg> Lest';
      }
    });

    if (!card || !total) return;
    var done = list.filter(function (n) { return n >= 1 && n <= total; }).length;
    var pct = Math.round((done / total) * 100);
    var ring = $("[data-ring]", card);
    if (ring) {
      var r = Number(ring.getAttribute("r"));
      var c = 2 * Math.PI * r;
      ring.style.strokeDasharray = c.toFixed(1);
      ring.style.strokeDashoffset = (c * (1 - done / total)).toFixed(1);
    }
    var num = $("[data-ring-label]", card);
    if (num) num.textContent = pct + "%";
    var sum = $("[data-progress-sum]", card);
    if (sum) {
      sum.textContent = done === 0
        ? "Du har ikke markert noen kapitler ennå."
        : done + " av " + total + " kapitler markert som lest.";
    }
    var reset = $("[data-progress-reset]", card);
    if (reset) {
      reset.hidden = done === 0;
      reset.addEventListener("click", function () {
        save(LS.read, []);
        toast("Framdriften er nullstilt");
        location.reload();
      });
    }
    var scores = store(LS.score, {});
    $$("[data-score-for]", card).forEach(function (el) {
      var key = el.getAttribute("data-score-for");
      var s = scores[key];
      var bar = $("i", el);
      var val = $("[data-score-val]", el);
      var pctS = s ? Math.round((s.correct / s.total) * 100) : 0;
      if (bar) bar.style.width = pctS + "%";
      if (val) val.textContent = s ? pctS + "%" : "–";
    });
  }

  /* ---------- Søk ---------- */
  var searchState = { loaded: false, loading: false, data: [], sel: 0, hits: [] };

  function loadIndex(cb) {
    if (searchState.loaded) return cb();
    if (window.BIO_INDEX) { searchState.data = window.BIO_INDEX; searchState.loaded = true; return cb(); }
    if (searchState.loading) return;
    searchState.loading = true;
    var s = document.createElement("script");
    s.src = (document.documentElement.getAttribute("data-base") || "") + "assets/search-index.js";
    s.onload = function () {
      searchState.data = window.BIO_INDEX || [];
      searchState.loaded = true;
      searchState.loading = false;
      cb();
    };
    s.onerror = function () { searchState.loading = false; cb(); };
    document.head.appendChild(s);
  }

  function normalize(s) { return String(s).toLowerCase(); }

  function runSearch(q) {
    var terms = normalize(q).split(/\s+/).filter(function (t) { return t.length > 1; });
    if (!terms.length) return [];
    var out = [];
    for (var i = 0; i < searchState.data.length; i++) {
      var d = searchState.data[i];
      var title = normalize(d.t);
      var body = normalize(d.b || "");
      var ctx = normalize(d.c || "");
      var score = 0, ok = true;
      for (var j = 0; j < terms.length; j++) {
        var t = terms[j];
        var inTitle = title.indexOf(t) !== -1;
        var inCtx = ctx.indexOf(t) !== -1;
        var pos = body.indexOf(t);
        if (!inTitle && !inCtx && pos === -1) { ok = false; break; }
        if (inTitle) score += title.indexOf(t) === 0 ? 14 : 9;
        if (inCtx) score += 3;
        if (pos !== -1) {
          score += 2;
          var re = new RegExp("\\b" + t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g");
          var m = body.match(re);
          if (m) score += Math.min(m.length, 5);
        }
      }
      if (ok) out.push({ d: d, score: score, term: terms[0] });
    }
    out.sort(function (a, b) { return b.score - a.score; });
    return out.slice(0, 24);
  }

  function snippet(text, term) {
    if (!text) return "";
    var i = normalize(text).indexOf(term);
    if (i === -1) return esc(text.slice(0, 120)) + (text.length > 120 ? "…" : "");
    var start = Math.max(0, i - 55);
    var slice = text.slice(start, start + 150);
    var html = esc((start > 0 ? "…" : "") + slice + (start + 150 < text.length ? "…" : ""));
    var re = new RegExp("(" + term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "ig");
    return html.replace(re, "<mark>$1</mark>");
  }

  function initSearch() {
    var overlay = $("[data-search-overlay]");
    if (!overlay) return;
    var input = $("[data-search-input]", overlay);
    var results = $("[data-search-results]", overlay);
    var lastFocus = null;

    function render(hits, q) {
      searchState.hits = hits;
      searchState.sel = 0;
      if (!q || q.trim().length < 2) {
        results.innerHTML = '<p class="search-empty">Skriv minst to tegn. Prøv <b>osmose</b>, <b>artsbegrep</b> eller <b>nisje</b>.</p>';
        return;
      }
      if (!hits.length) {
        results.innerHTML = '<p class="search-empty">Ingen treff på <b>' + esc(q) + "</b>.</p>";
        return;
      }
      results.innerHTML = hits.map(function (h, i) {
        return '<a class="search-hit" href="' + h.d.u + '" data-sel="' + (i === 0) + '">' +
          '<span class="search-kind">' + esc(h.d.k) + "</span>" +
          "<b>" + esc(h.d.t) + "</b>" +
          "<small>" + esc(h.d.c) + "</small>" +
          "<small>" + snippet(h.d.b, h.term) + "</small></a>";
      }).join("");
    }

    function move(delta) {
      var items = $$(".search-hit", results);
      if (!items.length) return;
      items[searchState.sel] && items[searchState.sel].setAttribute("data-sel", "false");
      searchState.sel = (searchState.sel + delta + items.length) % items.length;
      var el = items[searchState.sel];
      el.setAttribute("data-sel", "true");
      el.scrollIntoView({ block: "nearest" });
    }

    function open() {
      lastFocus = document.activeElement;
      overlay.setAttribute("data-open", "true");
      document.body.style.overflow = "hidden";
      loadIndex(function () {
        if (input.value) render(runSearch(input.value), input.value);
      });
      setTimeout(function () { input.focus(); input.select(); }, 20);
    }
    function close() {
      overlay.setAttribute("data-open", "false");
      document.body.style.overflow = "";
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    }

    $$("[data-search-open]").forEach(function (b) {
      b.addEventListener("click", function (e) { e.preventDefault(); open(); });
    });
    $$("[data-search-close]", overlay).forEach(function (b) { b.addEventListener("click", close); });
    overlay.addEventListener("mousedown", function (e) { if (e.target === overlay) close(); });

    input.addEventListener("input", function () {
      var q = input.value;
      loadIndex(function () { render(runSearch(q), q); });
    });

    input.addEventListener("keydown", function (e) {
      if (e.key === "ArrowDown") { e.preventDefault(); move(1); }
      else if (e.key === "ArrowUp") { e.preventDefault(); move(-1); }
      else if (e.key === "Enter") {
        var el = $$(".search-hit", results)[searchState.sel];
        if (el) { e.preventDefault(); location.href = el.getAttribute("href"); }
      }
    });

    document.addEventListener("keydown", function (e) {
      var open_ = overlay.getAttribute("data-open") === "true";
      if (e.key === "Escape" && open_) { close(); return; }
      var typing = /^(INPUT|TEXTAREA|SELECT)$/.test((e.target.tagName || "")) || e.target.isContentEditable;
      if (((e.key === "k" || e.key === "K") && (e.metaKey || e.ctrlKey)) || (e.key === "/" && !typing && !open_)) {
        e.preventDefault();
        open_ ? close() : open();
      }
    });

    render([], "");

    /* Selvstendig søkeside */
    var page = $("[data-search-page]");
    if (page) {
      var pInput = $("input", page);
      var pOut = $("[data-search-page-results]");
      var run = function () {
        var q = pInput.value;
        loadIndex(function () {
          var hits = runSearch(q);
          if (!q || q.trim().length < 2) {
            pOut.innerHTML = '<p class="empty-state">Skriv et søkeord for å lete gjennom alle kapitler, begreper og oppgaver.</p>';
            return;
          }
          if (!hits.length) { pOut.innerHTML = '<p class="empty-state">Ingen treff på <b>' + esc(q) + "</b>.</p>"; return; }
          pOut.innerHTML = '<p class="section-head"><span>' + hits.length + " treff</span></p>" +
            '<div class="terms">' + hits.map(function (h) {
              return '<a class="card" href="' + h.d.u + '"><span class="search-kind">' + esc(h.d.k) + "</span>" +
                "<h3>" + esc(h.d.t) + "</h3><p>" + snippet(h.d.b, h.term) + "</p>" +
                '<span class="card__meta">' + esc(h.d.c) + "</span></a>";
            }).join("") + "</div>";
        });
      };
      pInput.addEventListener("input", run);
      var qp = new URLSearchParams(location.search).get("q");
      if (qp) { pInput.value = qp; run(); }
      pInput.focus();
    }
  }

  /* ---------- Quiz ---------- */
  function shuffle(a) {
    var arr = a.slice();
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = arr[i]; arr[i] = arr[j]; arr[j] = t;
    }
    return arr;
  }

  function initQuiz() {
    var root = $("[data-quiz]");
    if (!root || !window.BIO_QUIZ) return;
    var all = window.BIO_QUIZ;
    var key = root.getAttribute("data-quiz-key") || "alle";
    var limit = Number(root.getAttribute("data-quiz-limit") || 0);
    var pool = /^\d+$/.test(key)
      ? all.filter(function (q) { return String(q.n) === key; })
      : all.slice();
    if (!pool.length) return;
    var qs = [], idx = 0, correct = 0, answered = false, log = [];

    var letters = ["A", "B", "C", "D", "E"];

    function start() {
      qs = shuffle(pool);
      if (limit && qs.length > limit) qs = qs.slice(0, limit);
      idx = 0; correct = 0; answered = false; log = [];
      renderQ();
    }

    function renderQ() {
      if (idx >= qs.length) return renderEnd();
      var q = qs[idx];
      answered = false;
      root.innerHTML =
        '<div class="quiz__head"><span class="badge">' + esc(q.c || "Quiz") + '</span>' +
        '<span class="quiz__count">Spørsmål ' + (idx + 1) + " av " + qs.length + "</span></div>" +
        '<div class="quiz__progress"><i style="width:' + ((idx / qs.length) * 100) + '%"></i></div>' +
        '<p class="quiz__q">' + esc(q.q) + "</p>" +
        '<ul class="quiz__options">' + q.o.map(function (o, i) {
          return '<li><button type="button" class="opt" data-opt="' + i + '">' +
            '<span class="opt__key" aria-hidden="true">' + letters[i] + "</span><span>" + esc(o) + "</span></button></li>";
        }).join("") + "</ul>" +
        '<div data-quiz-after></div>';
      $$(".opt", root).forEach(function (b) {
        b.addEventListener("click", function () { answer(Number(b.getAttribute("data-opt"))); });
      });
    }

    function answer(i) {
      if (answered) return;
      answered = true;
      var q = qs[idx];
      var ok = i === q.a;
      if (ok) correct++;
      log.push({ q: q.q, ok: ok, right: q.o[q.a], e: q.e, u: q.u });
      $$(".opt", root).forEach(function (b, n) {
        b.setAttribute("disabled", "disabled");
        if (n === q.a) b.setAttribute("data-state", "correct");
        else if (n === i) b.setAttribute("data-state", "wrong");
      });
      var after = $("[data-quiz-after]", root);
      after.innerHTML =
        '<div class="quiz__feedback" data-ok="' + ok + '" role="status"><b>' +
        (ok ? "Riktig" : "Feil – riktig svar: " + esc(q.o[q.a])) + "</b>" + esc(q.e || "") + "</div>" +
        '<div class="quiz__foot"><button type="button" class="btn btn--primary" data-next>' +
        (idx + 1 >= qs.length ? "Se resultat" : "Neste spørsmål") + "</button>" +
        (q.u ? '<a class="btn btn--quiet btn--sm" href="' + q.u + '">Les om dette</a>' : "") + "</div>";
      var nxt = $("[data-next]", after);
      nxt.addEventListener("click", function () { idx++; renderQ(); });
      nxt.focus();
    }

    function renderEnd() {
      var pct = Math.round((correct / qs.length) * 100);
      var msg = pct >= 90 ? "Sterkt! Dette sitter." :
        pct >= 70 ? "Bra jobbet. Repeter det du bommet på." :
        pct >= 50 ? "Halvveis. Ta en runde til på kapitlene under." :
        "Les kapitlene på nytt og prøv igjen.";
      var scores = store(LS.score, {});
      var prev = scores[key];
      if (!prev || correct / qs.length > prev.correct / prev.total) {
        scores[key] = { correct: correct, total: qs.length, at: Date.now() };
        save(LS.score, scores);
      }
      root.innerHTML =
        '<div class="score"><div class="score__num">' + correct + " / " + qs.length + "</div>" +
        "<p>" + esc(msg) + (prev ? " Beste tidligere: " + prev.correct + "/" + prev.total + "." : "") + "</p>" +
        '<div class="quiz__foot" style="justify-content:center"><button type="button" class="btn btn--primary" data-again>Prøv igjen</button>' +
        '<a class="btn btn--ghost" href="' + link("kapitler") + '">Til kapitlene</a></div>' +
        '<div class="review">' + log.map(function (l) {
          return '<div class="review__item" data-ok="' + l.ok + '">' +
            (l.ok
              ? '<svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M8.1 14.3 4 10.2l1.4-1.4 2.7 2.7 6.5-6.5L16 6.4z"/></svg>'
              : '<svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M10 8.6 6.4 5 5 6.4 8.6 10 5 13.6 6.4 15 10 11.4 13.6 15 15 13.6 11.4 10 15 6.4 13.6 5z"/></svg>') +
            "<div>" + esc(l.q) + "<small>Riktig: " + esc(l.right) + "</small></div></div>";
        }).join("") + "</div></div>";
      $("[data-again]", root).addEventListener("click", start);
      root.scrollIntoView({ block: "start", behavior: "smooth" });
    }

    if (!initQuiz.keys) {
      initQuiz.keys = true;
      document.addEventListener("keydown", quizKeys);
    }
    function quizKeys(e) {
      if (!/^[1-5]$/.test(e.key)) return;
      var root = document.querySelector("[data-quiz]");
      if (!root) return;
      if (/^(INPUT|TEXTAREA)$/.test(e.target.tagName || "")) return;
      var btns = $$(".opt:not([disabled])", root);
      var b = btns[Number(e.key) - 1];
      if (b) b.click();
    }

    /* Kapittelfilter på quizsiden */
    var filter = $("[data-quiz-filter]");
    if (filter) {
      $$(".chip", filter).forEach(function (chip) {
        chip.addEventListener("click", function () {
          $$(".chip", filter).forEach(function (c) { c.setAttribute("data-active", "false"); });
          chip.setAttribute("data-active", "true");
          var ch = chip.getAttribute("data-ch");
          pool = ch === "alle" ? all : all.filter(function (q) { return String(q.n) === ch; });
          root.setAttribute("data-quiz-key", ch);
          key = ch;
          limit = ch === "alle" ? 15 : 0;
          start();
        });
      });
    }

    start();
  }

  /* ---------- Begreper ---------- */
  function initGlossary() {
    var root = $("[data-glossary]");
    if (!root) return;
    var input = $("[data-glossary-search]");
    var chips = $$("[data-glossary-filter] .chip");
    var items = $$("[data-term]", root);
    var count = $("[data-glossary-count]");
    var empty = $("[data-glossary-empty]");
    var active = "alle";

    function apply() {
      var q = (input.value || "").toLowerCase().trim();
      var shown = 0;
      items.forEach(function (el) {
        var hay = el.getAttribute("data-term");
        var ch = el.getAttribute("data-ch");
        var ok = (!q || hay.indexOf(q) !== -1) &&
          (active === "alle" || (" " + ch + " ").indexOf(" " + active + " ") !== -1);
        el.hidden = !ok;
        if (ok) shown++;
      });
      if (count) count.textContent = shown + (shown === 1 ? " begrep" : " begreper");
      if (empty) empty.hidden = shown !== 0;
    }
    input.addEventListener("input", apply);
    chips.forEach(function (c) {
      c.addEventListener("click", function () {
        chips.forEach(function (x) { x.setAttribute("data-active", "false"); });
        c.setAttribute("data-active", "true");
        active = c.getAttribute("data-ch");
        apply();
      });
    });
    apply();
  }



  /* ---------- Oppgavefilter ---------- */
  function initTasks() {
    var root = document.querySelector("[data-tasks]");
    if (!root) return;
    var input = document.querySelector("[data-task-search]");
    var chips = $$("[data-task-filter] .chip");
    var typeChips = $$("[data-task-type] .chip");
    var items = $$("[data-task]", root);
    var groups = $$("[data-task-group]", root);
    var count = document.querySelector("[data-task-count]");
    var empty = document.querySelector("[data-task-empty]");
    var ch = "alle", type = "alle";

    function apply() {
      var q = ((input && input.value) || "").toLowerCase().trim();
      var shown = 0;
      items.forEach(function (el) {
        var ok = (ch === "alle" || el.getAttribute("data-ch") === ch) &&
          (type === "alle" || el.getAttribute("data-type") === type) &&
          (!q || el.getAttribute("data-task").indexOf(q) !== -1);
        el.hidden = !ok;
        if (ok) shown++;
      });
      groups.forEach(function (g) {
        g.hidden = !$$("[data-task]", g).some(function (el) { return !el.hidden; });
      });
      if (count) count.textContent = shown + (shown === 1 ? " oppgave" : " oppgaver");
      if (empty) empty.hidden = shown !== 0;
    }
    if (input) input.addEventListener("input", apply);
    chips.forEach(function (c) {
      c.addEventListener("click", function () {
        chips.forEach(function (x) { x.setAttribute("data-active", "false"); });
        c.setAttribute("data-active", "true");
        ch = c.getAttribute("data-ch");
        apply();
      });
    });
    typeChips.forEach(function (c) {
      c.addEventListener("click", function () {
        typeChips.forEach(function (x) { x.setAttribute("data-active", "false"); });
        c.setAttribute("data-active", "true");
        type = c.getAttribute("data-type");
        apply();
      });
    });

    var openAll = document.querySelector("[data-open-all]");
    if (openAll) {
      openAll.addEventListener("click", function () {
        var opened = openAll.getAttribute("data-state") === "open";
        $$("details", root).forEach(function (d) { if (!d.closest("[hidden]")) d.open = !opened; });
        openAll.setAttribute("data-state", opened ? "closed" : "open");
        openAll.textContent = opened ? "Vis alle svar" : "Skjul alle svar";
      });
    }
    apply();
  }

  /* ---------- Flashcards ---------- */
  function initFlash() {
    var root = document.querySelector("[data-flash]");
    if (!root || !window.BIO_CARDS) return;
    var all = window.BIO_CARDS;
    var KNOWN = "bio:v1:cards";
    var known = store(KNOWN, {});
    var filterCh = "alle";
    var onlyHard = false;
    var queue = [], current = null, flipped = false, doneCount = 0, againCount = 0, total = 0;

    function deck() {
      var list = all.filter(function (c) { return filterCh === "alle" || String(c.n) === filterCh; });
      if (onlyHard) list = list.filter(function (c) { return !known[c.id]; });
      return shuffle(list);
    }

    function start() {
      queue = deck();
      total = queue.length;
      doneCount = 0; againCount = 0;
      next();
    }

    function next() {
      current = queue.shift();
      flipped = false;
      render();
    }

    function render() {
      if (!current) return renderDone();
      var pos = total - queue.length;
      root.innerHTML =
        '<div class="flash__bar"><span class="badge">' + esc(current.c) + '</span>' +
        '<span class="badge">' + esc(current.k) + '</span>' +
        '<span class="quiz__count">Kort ' + pos + " av " + total + "</span></div>" +
        '<div class="quiz__progress"><i style="width:' + Math.round(((pos - 1) / Math.max(total, 1)) * 100) + '%"></i></div>' +
        '<div class="flash-stage"><button type="button" class="flashcard" data-card aria-live="polite" data-flipped="' + flipped + '">' +
          '<span class="flashcard__face">' +
            '<span class="flashcard__kind">' + (current.k === "Begrep" ? "Hva betyr" : "Spørsmål") + "</span>" +
            '<span class="flashcard__front-text">' + esc(current.f) + "</span>" +
            '<span class="flashcard__hint">Trykk på kortet eller mellomrom for å snu</span>' +
          "</span>" +
          '<span class="flashcard__face flashcard__face--back">' +
            '<span class="flashcard__kind">Svar</span>' +
            '<span class="flashcard__back-text">' + esc(current.b) + "</span>" +
            (current.u ? '<span class="flashcard__hint">' + esc(current.c) + "</span>" : "") +
          "</span>" +
        "</button></div>" +
        (flipped
          ? '<div class="flash-actions"><button type="button" class="btn btn--again" data-again>Øv mer <kbd>1</kbd></button>' +
            '<button type="button" class="btn btn--know" data-know>Kan det <kbd>2</kbd></button></div>'
          : '<div class="flash-actions flash-actions--single"><button type="button" class="btn btn--ghost" data-flip>Vis svar <kbd>mellomrom</kbd></button></div>') +
        '<p class="flash-stat"><span>Kan det: <b>' + doneCount + "</b></span><span>Øv mer: <b>" + againCount + "</b></span>" +
        "<span>Igjen: <b>" + queue.length + "</b></span></p>";

      var card = root.querySelector("[data-card]");
      card.addEventListener("click", flip);
      var fl = root.querySelector("[data-flip]");
      if (fl) fl.addEventListener("click", flip);
      var ag = root.querySelector("[data-again]");
      if (ag) ag.addEventListener("click", function () { mark(false); });
      var kn = root.querySelector("[data-know]");
      if (kn) kn.addEventListener("click", function () { mark(true); });
    }

    function flip() { flipped = !flipped; render(); }

    function mark(ok) {
      if (ok) { doneCount++; known[current.id] = 1; }
      else {
        againCount++;
        delete known[current.id];
        var at = Math.min(queue.length, 3);
        queue.splice(at, 0, current);
      }
      save(KNOWN, known);
      next();
    }

    function renderDone() {
      var totalKnown = 0;
      all.forEach(function (c) { if (known[c.id]) totalKnown++; });
      root.innerHTML =
        '<div class="score"><div class="score__num">' + doneCount + " kort</div>" +
        "<p>Bunken er ferdig. Du kan nå <b>" + totalKnown + "</b> av " + all.length + " kort totalt.</p>" +
        '<div class="quiz__foot" style="justify-content:center">' +
        '<button type="button" class="btn btn--primary" data-restart>Kjør bunken igjen</button>' +
        '<button type="button" class="btn btn--ghost" data-hard>Bare de jeg ikke kan</button></div></div>';
      root.querySelector("[data-restart]").addEventListener("click", function () { onlyHard = false; start(); });
      root.querySelector("[data-hard]").addEventListener("click", function () { onlyHard = true; start(); });
    }

    var wanted = new URLSearchParams(location.search).get("k");
    if (!wanted) {
      var hm = /~k(\d+)/.exec(location.hash || "");
      if (hm) wanted = hm[1];
    }
    var filter = document.querySelector("[data-flash-filter]");
    if (filter && wanted) {
      var target = $$(".chip", filter).filter(function (c) { return c.getAttribute("data-ch") === wanted; })[0];
      if (target) {
        $$(".chip", filter).forEach(function (c) { c.setAttribute("data-active", "false"); });
        target.setAttribute("data-active", "true");
        filterCh = wanted;
      }
    }
    if (filter) {
      $$(".chip", filter).forEach(function (chip) {
        chip.addEventListener("click", function () {
          $$(".chip", filter).forEach(function (c) { c.setAttribute("data-active", "false"); });
          chip.setAttribute("data-active", "true");
          filterCh = chip.getAttribute("data-ch");
          onlyHard = false;
          start();
        });
      });
    }
    var reset = document.querySelector("[data-flash-reset]");
    if (reset) {
      reset.addEventListener("click", function () {
        known = {};
        save(KNOWN, known);
        toast("Kortene er nullstilt");
        start();
      });
    }

    if (!initFlash.keys) {
      initFlash.keys = true;
      document.addEventListener("keydown", function (e) {
        if (/^(INPUT|TEXTAREA)$/.test(e.target.tagName || "")) return;
        if (!document.querySelector("[data-flash]") || !current) return;
        if (e.key === " " || e.key === "Enter") { e.preventDefault(); flip(); }
        else if (flipped && e.key === "1") { mark(false); }
        else if (flipped && e.key === "2") { mark(true); }
      });
    }

    start();
  }

  /* ---------- Oppstart ---------- */
  function bootShell() {
    initTheme();
    initMenu();
    initSearch();
    document.documentElement.classList.add("js-ready");
  }

  function bootPage() {
    initReading();
    initProgressButton();
    initProgressCard();
    initQuiz();
    initGlossary();
    initFlash();
    initTasks();
  }

  window.BIO_BOOT_PAGE = bootPage;

  function boot() {
    bootShell();
    if (!window.BIO_SINGLE) bootPage();
    if (window.BIO_ROUTER) window.BIO_ROUTER();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
