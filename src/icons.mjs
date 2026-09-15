const s = (d, extra = "") =>
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"${extra}>${d}</svg>`;

export const icons = {
  leaf: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 3c0 9-5.2 14.3-12 14.9V21H6v-3.1C6.3 10.4 11.4 5.6 20 3Zm-9.6 12.2C14.7 13.9 17.4 10.4 18 6c-5.6 2-9 5.6-9.6 10.2Z"/></svg>`,
  search: s(`<circle cx="11" cy="11" r="7"/><path d="m20 20-3.2-3.2"/>`),
  sun: s(`<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4"/>`),
  moon: s(`<path d="M20 13.5A8 8 0 1 1 10.5 4a6.5 6.5 0 0 0 9.5 9.5Z"/>`),
  menu: s(`<path d="M4 7h16M4 12h16M4 17h16"/>`),
  close: s(`<path d="m6 6 12 12M18 6 6 18"/>`),
  book: s(`<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H19v15H6.5A2.5 2.5 0 0 0 4 20.5Z"/><path d="M4 20.5A2.5 2.5 0 0 1 6.5 18H19v3H6.5A2.5 2.5 0 0 1 4 20.5Z"/>`),
  cards: s(`<rect x="3" y="4" width="8" height="7" rx="1.5"/><rect x="13" y="4" width="8" height="7" rx="1.5"/><rect x="3" y="13" width="8" height="7" rx="1.5"/><rect x="13" y="13" width="8" height="7" rx="1.5"/>`),
  quiz: s(`<circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 1 1 3.4 2.3c-.6.3-.9.8-.9 1.4v.3"/><path d="M12 17h.01"/>`),
  list: s(`<path d="M8 6h12M8 12h12M8 18h12M4 6h.01M4 12h.01M4 18h.01"/>`),
  check: `<svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M8.1 14.3 4 10.2l1.4-1.4 2.7 2.7 6.5-6.5L16 6.4z"/></svg>`,
  arrow: s(`<path d="M5 12h14m-6-6 6 6-6 6"/>`),
  key: s(`<path d="M12 3v4m0 0-2 2m2-2 2 2"/><circle cx="12" cy="14" r="5"/>`),
  info: s(`<circle cx="12" cy="12" r="9"/><path d="M12 11v5m0-8h.01"/>`),
  spark: s(`<path d="M12 3v5m0 8v5m9-9h-5M8 12H3m13.4-6.4-3.5 3.5m-1.8 1.8-3.5 3.5m12.8 0-3.5-3.5m-1.8-1.8L7.6 5.6"/>`),
  dna: s(`<path d="M7 3c0 5 10 5 10 10S7 18 7 21"/><path d="M17 3c0 5-10 5-10 10s10 3 10 8"/><path d="M8.5 7h7M8.5 17h7"/>`),
  target: s(`<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3.2"/>`),
  flask: s(`<path d="M9 3h6M10 3v6.2L4.8 18A2 2 0 0 0 6.5 21h11a2 2 0 0 0 1.7-3L14 9.2V3"/><path d="M7.5 15h9"/>`),
  globe: s(`<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9S14.5 18.4 12 21c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3Z"/>`)
};
