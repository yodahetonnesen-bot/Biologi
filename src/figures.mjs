/* Skjematiske figurer. Alle bruker temavariabler, så de virker i lyst og mørkt tema. */

const open = (vb, title) =>
  `<svg viewBox="${vb}" role="img" aria-label="${title}" xmlns="http://www.w3.org/2000/svg" style="font-family:var(--font-sans)">`;

const box = (x, y, w, h, label, kind = "plain", sub = "") => {
  const fill = kind === "brand" ? "var(--brand-soft)" : kind === "accent" ? "var(--accent-soft)" : "var(--surface-2)";
  const stroke = kind === "brand" ? "var(--brand-line)" : kind === "accent" ? "var(--accent-line)" : "var(--border-strong)";
  const ty = sub ? y + h / 2 - 3 : y + h / 2 + 5;
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" fill="${fill}" stroke="${stroke}" stroke-width="1.5"/>
<text x="${x + w / 2}" y="${ty}" text-anchor="middle" font-size="15" font-weight="600" fill="var(--text)">${label}</text>` +
    (sub ? `<text x="${x + w / 2}" y="${y + h / 2 + 16}" text-anchor="middle" font-size="12.5" fill="var(--muted)">${sub}</text>` : "");
};

const arrow = (x1, y1, x2, y2, color = "var(--brand)") =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="2" marker-end="url(#ah)"/>`;

const defs = `<defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0 10 5 0 10z" fill="var(--brand)"/></marker>
<marker id="ahr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0 10 5 0 10z" fill="var(--err)"/></marker>
<marker id="ahb" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0 10 5 0 10z" fill="var(--info)"/></marker></defs>`;

const label = (x, y, t, size = 13, weight = 500, fill = "var(--muted)", anchor = "middle") =>
  `<text x="${x}" y="${y}" text-anchor="${anchor}" font-size="${size}" font-weight="${weight}" fill="${fill}">${t}</text>`;

export const figures = {
  /* Biologisk hierarki */
  hierarki() {
    const rows = [
      ["Økosystem", "alt levende og ikke-levende i et område"],
      ["Samfunn", "alle populasjonene på stedet"],
      ["Populasjon", "individer av samme art i området"],
      ["Individ", "én selvstendig organisme"],
      ["Organsystem", "organer som løser en oppgave sammen"],
      ["Organ", "flere vevstyper"],
      ["Vev", "celler med samme oppgave"],
      ["Celle", "livets minste byggestein"]
    ];
    const h = 40, gap = 7;
    const body = rows.map((r, i) => {
      const y = 10 + i * (h + gap);
      const w = 760 - i * 62;
      return `${box(20, y, w, h, "", "plain")}
<text x="38" y="${y + 25}" font-size="14.5" font-weight="650" fill="var(--text)">${r[0]}</text>
<text x="${38 + r[0].length * 9 + 14}" y="${y + 25}" font-size="12.5" fill="var(--muted)">${r[1]}</text>`;
    }).join("\n");
    return open(`0 0 800 ${10 + rows.length * (h + gap)}`, "Det biologiske hierarkiet fra økosystem til celle") +
      defs + body + "</svg>";
  },

  /* Den naturvitenskapelige arbeidsmetoden */
  metode() {
    return open("0 0 800 250", "Den hypotetisk-deduktive arbeidsmetoden") + defs +
      box(15, 30, 165, 70, "Observasjon", "brand", "noe du legger merke til") +
      box(215, 30, 165, 70, "Hypotese", "brand", "mulig forklaring") +
      box(415, 30, 165, 70, "Systematisk forsøk", "brand", "kontrollerte variabler") +
      box(615, 30, 170, 70, "Konklusjon", "brand", "bekreftet/avkreftet") +
      arrow(185, 65, 210, 65) + arrow(385, 65, 410, 65) + arrow(585, 65, 610, 65) +
      `<path d="M700 105 V 150 H 297 V 110" fill="none" stroke="var(--accent)" stroke-width="2" stroke-dasharray="6 5" marker-end="url(#ah)"/>` +
      label(498, 172, "Avkreftet hypotese: ny hypotese eller nytt forsøk", 13, 500, "var(--accent)") +
      box(240, 190, 320, 48, "Teori", "accent", "hypoteser testet mange nok ganger, uavhengig") +
      "</svg>";
  },

  /* Tre domener og seks riker */
  domener() {
    const line = (x1, y1, x2, y2) =>
      `<path d="M${x1} ${y1} C ${(x1 + x2) / 2} ${y1}, ${(x1 + x2) / 2} ${y2}, ${x2} ${y2}" fill="none" stroke="var(--border-strong)" stroke-width="2"/>`;
    return open("0 0 800 330", "Tre domener og seks riker") + defs +
      `<circle cx="44" cy="165" r="7" fill="var(--accent)"/>` +
      label(44, 192, "LUCA", 13, 600, "var(--accent)") +
      line(51, 165, 190, 55) + line(51, 165, 190, 150) + line(51, 165, 190, 250) +
      box(190, 30, 170, 50, "Bakterier", "brand", "domene") +
      box(190, 125, 170, 50, "Arker", "brand", "domene") +
      box(190, 225, 170, 50, "Eukaryoter", "brand", "domene") +
      line(360, 250, 480, 45) + line(360, 250, 480, 125) + line(360, 250, 480, 205) + line(360, 250, 480, 285) +
      box(480, 22, 160, 46, "Protister", "plain") +
      box(480, 102, 160, 46, "Planter", "plain") +
      box(480, 182, 160, 46, "Sopper", "plain") +
      box(480, 262, 160, 46, "Dyr", "plain") +
      label(720, 45, "Uten cellekjerne", 12.5, 500, "var(--muted)") +
      label(720, 63, "(prokaryote)", 12.5, 500, "var(--muted)") +
      label(720, 200, "Med cellekjerne", 12.5, 500, "var(--muted)") +
      label(720, 218, "(eukaryote)", 12.5, 500, "var(--muted)") +
      "</svg>";
  },

  /* Prokaryot og eukaryot celle */
  celler() {
    const dot = (x, y, r, fill) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}"/>`;
    return open("0 0 800 300", "Prokaryot og eukaryot celle") + defs +
      `<rect x="20" y="40" width="350" height="210" rx="70" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="2.5"/>
<rect x="30" y="50" width="330" height="190" rx="62" fill="none" stroke="var(--border-strong)" stroke-width="1.5" stroke-dasharray="4 4"/>
<path d="M195 105 c -40 -18 -70 20 -40 42 c 30 22 78 -4 52 -30" fill="none" stroke="var(--accent)" stroke-width="3"/>` +
      dot(120, 180, 5, "var(--muted)") + dot(150, 200, 5, "var(--muted)") + dot(240, 185, 5, "var(--muted)") +
      dot(265, 150, 5, "var(--muted)") + dot(100, 130, 5, "var(--muted)") +
      `<path d="M370 145 c 35 -12 40 20 70 6" fill="none" stroke="var(--brand)" stroke-width="2.5"/>` +
      label(195, 30, "Prokaryot celle (bakterie)", 14.5, 650, "var(--text)") +
      label(196, 100, "fritt DNA", 12, 500, "var(--accent)") +
      label(105, 228, "ribosomer", 12) + label(415, 152, "flagell", 12, 500, "var(--muted)", "start") +
      `<rect x="430" y="40" width="350" height="210" rx="40" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="2.5"/>
<circle cx="545" cy="140" r="48" fill="var(--surface)" stroke="var(--accent)" stroke-width="2.5"/>
<path d="M525 128 c 22 -14 26 22 44 8" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
<ellipse cx="680" cy="105" rx="42" ry="22" fill="var(--surface)" stroke="var(--info)" stroke-width="2"/>
<path d="M648 105 q 10 -10 16 0 t 16 0 t 16 0 t 16 0" fill="none" stroke="var(--info)" stroke-width="1.6"/>
<path d="M640 190 q 30 -14 60 0 q -30 16 -60 0" fill="var(--surface)" stroke="var(--border-strong)" stroke-width="1.6"/>
<path d="M640 212 q 30 -14 60 0 q -30 16 -60 0" fill="var(--surface)" stroke="var(--border-strong)" stroke-width="1.6"/>` +
      dot(470, 205, 5, "var(--muted)") + dot(500, 225, 5, "var(--muted)") + dot(590, 215, 5, "var(--muted)") +
      label(605, 30, "Eukaryot celle", 14.5, 650, "var(--text)") +
      label(545, 143, "cellekjerne", 12, 600, "var(--accent)") +
      label(680, 78, "mitokondrie", 12, 500, "var(--info)") +
      label(670, 242, "golgiapparat", 12) +
      "</svg>";
  },

  /* Cellemembran */
  membran() {
    let lipids = "";
    for (let i = 0; i < 22; i++) {
      const x = 40 + i * 33;
      if (x > 300 && x < 400) continue;
      lipids += `<circle cx="${x}" cy="95" r="10" fill="var(--brand)"/>
<path d="M${x - 4} 105 v 38 M${x + 4} 105 v 38" stroke="var(--brand)" stroke-width="3" stroke-linecap="round" opacity=".55"/>
<circle cx="${x}" cy="195" r="10" fill="var(--brand)"/>
<path d="M${x - 4} 185 v -38 M${x + 4} 185 v -38" stroke="var(--brand)" stroke-width="3" stroke-linecap="round" opacity=".55"/>`;
    }
    return open("0 0 800 290", "Cellemembranen med fosfolipider og transportprotein") + defs +
      `<rect x="0" y="0" width="800" height="70" fill="var(--info-soft)"/>
<rect x="0" y="220" width="800" height="70" fill="var(--surface-2)"/>` +
      label(60, 30, "Utenfor cellen", 13.5, 600, "var(--info)", "start") +
      label(60, 262, "Inni cellen (cytoplasma)", 13.5, 600, "var(--muted)", "start") +
      lipids +
      `<rect x="300" y="72" width="96" height="146" rx="26" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="2.5"/>
<path d="M348 78 v 40 m0 54 v 40" stroke="var(--accent)" stroke-width="12" stroke-linecap="round" opacity=".28"/>` +
      label(348, 150, "transport-", 12, 600, "var(--accent)") + label(348, 166, "protein", 12, 600, "var(--accent)") +
      arrow(348, 40, 348, 240, "var(--accent)") +
      label(430, 45, "Fasilitert diffusjon og aktiv transport", 13, 500, "var(--accent)", "start") +
      arrow(160, 40, 160, 240) +
      label(175, 45, "Små, upolare molekyler går rett gjennom", 13, 500, "var(--brand)", "start") +
      label(660, 150, "fettsyrehaler (hydrofobe)", 12, 500, "var(--muted)") +
      "</svg>";
  },

  /* Trofiske nivåer */
  naeringskjede() {
    const rows = [
      ["Tredjekonsument", "kongeørn, jerv", 220],
      ["Andrekonsument", "fjellrev, snøspurv", 380],
      ["Førstekonsument", "lemen, rype (herbivore)", 540],
      ["Produsent", "planter, alger, blågrønnbakterier", 700]
    ];
    let out = "";
    rows.forEach((r, i) => {
      const y = 25 + i * 68;
      const w = r[2];
      const x = (800 - w) / 2;
      out += `<rect x="${x}" y="${y}" width="${w}" height="54" rx="8" fill="var(--brand-soft)" stroke="var(--brand-line)" stroke-width="1.5" opacity="${0.55 + i * 0.15}"/>
<text x="400" y="${y + 24}" text-anchor="middle" font-size="14" font-weight="650" fill="var(--text)">${r[0]}</text>
<text x="400" y="${y + 42}" text-anchor="middle" font-size="12.5" fill="var(--muted)">${r[1]}</text>`;
      if (i < rows.length - 1) out += arrow(400, y + 68, 400, y + 58);
    });
    out += `<path d="M700 300 V 60" stroke="var(--accent)" stroke-width="2" marker-end="url(#ah)" stroke-dasharray="7 5"/>`;
    out += label(715, 190, "Opptil 90 %", 12.5, 600, "var(--accent)", "start");
    out += label(715, 208, "av energien", 12.5, 500, "var(--accent)", "start");
    out += label(715, 226, "tapes per nivå", 12.5, 500, "var(--accent)", "start");
    out += box(30, 330, 220, 46, "Nedbrytere", "accent", "sopp og bakterier");
    out += `<path d="M250 353 H 690 V 90" fill="none" stroke="var(--accent)" stroke-width="2" marker-end="url(#ah)"/>`;
    return open("0 0 800 390", "Trofiske nivåer i en næringskjede") + defs + out + "</svg>";
  },

  /* Dobbelt kretsløp */
  kretslop() {
    return open("0 0 800 330", "Det doble kretsløpet hos mennesket") + defs +
      box(320, 120, 160, 100, "Hjertet", "brand", "fire kammer") +
      box(310, 20, 180, 62, "Lunger", "plain", "gassutveksling") +
      box(310, 250, 180, 62, "Kroppen", "plain", "alle cellene") +
      `<path d="M355 120 V 92" stroke="var(--info)" stroke-width="2.5" marker-end="url(#ahb)"/>
<path d="M445 82 V 112" stroke="var(--err)" stroke-width="2.5" marker-end="url(#ahr)"/>
<path d="M445 220 V 244" stroke="var(--err)" stroke-width="2.5" marker-end="url(#ahr)"/>
<path d="M355 312 V 226" stroke="var(--info)" stroke-width="2.5" marker-end="url(#ahb)"/>` +
      label(250, 105, "Lille kretsløp", 13.5, 650, "var(--text)") +
      label(250, 123, "hjerte → lunger → hjerte", 12, 500, "var(--muted)") +
      label(600, 250, "Store kretsløp", 13.5, 650, "var(--text)") +
      label(600, 268, "hjerte → kropp → hjerte", 12, 500, "var(--muted)") +
      `<circle cx="600" cy="140" r="6" fill="var(--err)"/>` + label(614, 145, "oksygenrikt blod", 12.5, 500, "var(--muted)", "start") +
      `<circle cx="600" cy="170" r="6" fill="var(--info)"/>` + label(614, 175, "oksygenfattig blod", 12.5, 500, "var(--muted)", "start") +
      "</svg>";
  },

  /* Nervecelle */
  nevron() {
    return open("0 0 800 230", "Nervecelle med dendritter, akson og synapse") + defs +
      `<path d="M60 115 l -34 -34 M60 115 l -40 4 M60 115 l -30 38 M60 115 l -8 -46" stroke="var(--brand)" stroke-width="3" stroke-linecap="round"/>
<circle cx="92" cy="115" r="34" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="2.5"/>
<circle cx="92" cy="115" r="13" fill="var(--surface)" stroke="var(--accent)" stroke-width="2"/>
<path d="M126 115 H 640" stroke="var(--brand)" stroke-width="6" stroke-linecap="round"/>` +
      [0, 1, 2, 3].map(i => `<rect x="${170 + i * 115}" y="101" width="88" height="28" rx="14" fill="var(--info-soft)" stroke="var(--info)" stroke-width="2"/>`).join("") +
      `<path d="M640 115 l 30 -20 M640 115 l 30 20 M640 115 l 34 0" stroke="var(--brand)" stroke-width="3" stroke-linecap="round"/>
<rect x="690" y="70" width="96" height="92" rx="16" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="2"/>` +
      [0, 1, 2].map(i => `<circle cx="${706 + i * 22}" cy="${102 + (i % 2) * 24}" r="6" fill="var(--accent)"/>`).join("") +
      label(30, 195, "dendritter", 12.5, 500, "var(--muted)", "start") +
      label(92, 175, "cellekropp", 12.5, 600, "var(--text)") +
      label(380, 170, "akson med gliaceller (myelin)", 12.5, 500, "var(--info)") +
      label(738, 185, "synapse med", 12.5, 600, "var(--accent)") +
      label(738, 201, "transmittere", 12.5, 600, "var(--accent)") +
      arrow(300, 60, 460, 60) + label(380, 45, "nerveimpulsen går bare én vei", 12.5, 500, "var(--brand)") +
      "</svg>";
  },

  /* Nyrekapsel og nyrekanal */
  nefron() {
    return open("0 0 800 300", "Nyrekapsel, nyrekanal og reabsorpsjon") + defs +
      `<circle cx="120" cy="80" r="52" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="2.5"/>
<path d="M96 60 c 30 -18 48 14 22 26 c -26 12 -44 -10 -14 -22 M104 96 c 26 12 44 -8 18 -20" fill="none" stroke="var(--err)" stroke-width="2.5"/>
<path d="M172 88 H 300 C 360 88 360 120 360 150 V 200 C 360 236 420 236 420 200 V 150 C 420 118 470 110 520 110 H 700"
 fill="none" stroke="var(--brand)" stroke-width="16" stroke-linecap="round" opacity=".28"/>
<path d="M172 88 H 300 C 360 88 360 120 360 150 V 200 C 360 236 420 236 420 200 V 150 C 420 118 470 110 520 110 H 700"
 fill="none" stroke="var(--brand)" stroke-width="2.5" stroke-linecap="round" marker-end="url(#ah)"/>` +
      label(120, 30, "Nyrekapsel", 13.5, 650, "var(--text)") +
      label(120, 152, "blodvæske presses ut", 12, 500, "var(--muted)") +
      label(120, 168, "→ forurin", 12, 600, "var(--brand)") +
      label(390, 265, "Henles sløyfe", 12.5, 600, "var(--text)") +
      label(700, 88, "samlerør → urin", 12.5, 600, "var(--accent)") +
      [[250, 60], [480, 82]].map(p => arrow(p[0], p[1], p[0], p[1] - 34, "var(--info)")).join("") +
      label(250, 14, "vann, glukose, aminosyrer og salter tas opp igjen i blodet", 12.5, 500, "var(--info)", "start") +
      "</svg>";
  },

  /* Suksesjon */
  suksesjon() {
    const stage = (x, title, sub, trees) => {
      let art = "";
      for (let i = 0; i < trees; i++) {
        const tx = x + 22 + i * 30;
        const th = 20 + i * 12 + trees * 7;
        art += `<path d="M${tx} 190 V ${190 - th}" stroke="var(--brand)" stroke-width="4" stroke-linecap="round"/>
<circle cx="${tx}" cy="${190 - th - 8}" r="${6 + trees * 1.6}" fill="var(--brand)" opacity=".6"/>`;
      }
      return `<rect x="${x}" y="60" width="170" height="130" rx="10" fill="var(--surface-2)" stroke="var(--border-strong)" stroke-width="1.5"/>
${art}<line x1="${x}" y1="190" x2="${x + 170}" y2="190" stroke="var(--border-strong)" stroke-width="2"/>
<text x="${x + 85}" y="215" text-anchor="middle" font-size="13.5" font-weight="650" fill="var(--text)">${title}</text>
<text x="${x + 85}" y="233" text-anchor="middle" font-size="12" fill="var(--muted)">${sub}</text>`;
    };
    return open("0 0 800 260", "Sekundærsuksesjon etter skogbrann") + defs +
      stage(15, "Brann", "nitrogen frigjøres", 0) +
      stage(205, "Pionérfase", "geitrams, brennesle", 1) +
      stage(395, "Konsolidering", "lauvtrær, mange arter", 2) +
      stage(585, "Klimaksfase", "barskog igjen", 3) +
      arrow(190, 125, 200, 125) + arrow(380, 125, 390, 125) + arrow(570, 125, 580, 125) +
      label(400, 30, "Tid: fra noen år til flere hundre år", 13, 500, "var(--muted)") +
      "</svg>";
  }
};

export function figure(name, caption) {
  const fn = figures[name];
  if (!fn) throw new Error("Ukjent figur: " + name);
  return `<figure class="figure">${fn()}${caption ? `<figcaption>${caption}</figcaption>` : ""}</figure>`;
}
