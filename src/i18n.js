// i18n.js — the language of the card's own text.
//
// The English wording in the source is the key. tr('Recent events') returns the
// text unchanged for English, and for any language with no entry yet, so a
// missing translation shows English rather than a blank or a key.
//
// To add a language: copy src/lang-it.js to src/lang-xx.js, translate the
// values, list the file in build.py before this one, and add it to LANGS below
// (the editor offers whatever is listed there). {n} style placeholders are
// filled in by tr(); keep them, and any <b> or <br>, in the translation.
// python tools/check-lang.py reports missing or malformed entries.

import { IT, IT_LABELS } from './lang-it.js';
import { DE, DE_LABELS } from './lang-de.js';
import { FR, FR_LABELS } from './lang-fr.js';
import { ES, ES_LABELS } from './lang-es.js';
import { PT, PT_LABELS } from './lang-pt.js';
import { NL, NL_LABELS } from './lang-nl.js';
import { PL, PL_LABELS } from './lang-pl.js';

// code → { name shown in the editor, strings, labels }
export const LANGS = {
  en: { name: 'English' },
  it: { name: 'Italiano', strings: IT, labels: IT_LABELS },
  de: { name: 'Deutsch', strings: DE, labels: DE_LABELS },
  fr: { name: 'Français', strings: FR, labels: FR_LABELS },
  es: { name: 'Español', strings: ES, labels: ES_LABELS },
  pt: { name: 'Português', strings: PT, labels: PT_LABELS },
  nl: { name: 'Nederlands', strings: NL, labels: NL_LABELS },
  pl: { name: 'Polski', strings: PL, labels: PL_LABELS },
};

let _lang = 'en';

// 'it-IT' and 'it_it' both mean 'it'. Anything unknown falls back to English.
export function setLang(code) {
  const c = String(code || 'en').toLowerCase().split(/[-_]/)[0];
  _lang = LANGS[c] ? c : 'en';
}
export function getLang() { return _lang; }

// A language set in the card config wins; otherwise Home Assistant's own.
export function resolveLang(configured, hass) {
  if (configured && configured !== 'auto') return configured;
  return hass?.locale?.language || hass?.language
    || (typeof navigator !== 'undefined' && navigator.language) || 'en';
}

export function tr(s, vars) {
  let out = LANGS[_lang]?.strings?.[s] ?? s;
  if (vars) for (const k in vars) out = out.split('{' + k + '}').join(String(vars[k]));
  return out;
}

// A detection label (or review severity): translated when known, otherwise
// capitalised the way the card always did.
export function lab(s) {
  if (!s) return s;
  return LANGS[_lang]?.labels?.[s] ?? (s.charAt(0).toUpperCase() + s.slice(1));
}
