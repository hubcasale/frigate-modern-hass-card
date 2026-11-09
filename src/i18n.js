// i18n.js — the language of the card's own text.
//
// The English wording in the source is the key. tr('Recent events') returns the
// text unchanged for English, and for any language with no entry yet, so a
// missing translation shows English rather than a blank or a key.
//
// To add a language, copy the IT block below, translate the values, and add it
// to LANGS (the editor offers whatever is listed there). {n} style
// placeholders are filled in by tr(); keep them in the translation.

const IT = {
  // toolbar and shell
  'Show one camera': 'Mostra una telecamera',
  'Show all cameras': 'Mostra tutte le telecamere',
  'Single': 'Singola',
  'Grid': 'Griglia',
  'Fullscreen': 'Schermo intero',
  'Show events panel': 'Mostra il pannello eventi',
  'Hide events panel': 'Nascondi il pannello eventi',
  'All cameras': 'Tutte le telecamere',
  'Auto-rotate': 'Rotazione automatica',
  'Auto-rotate off': 'Rotazione automatica disattivata',
  'Rotating every {n}s': 'Cambio telecamera ogni {n} s',
  'Close': 'Chiudi',
  'Cameras': 'Telecamere',
  'Camera': 'Telecamera',
  'Connecting…': 'Connessione…',
  'Live': 'Diretta',
  'Back to live': 'Torna alla diretta',
  'Back to where you were before zooming in': 'Torna a dove eri prima dello zoom',
  'Now': 'Ora',
  'now': 'ora',
  'Back to the last hours up to now': 'Torna alle ultime ore fino a ora',
  'Filter': 'Filtro',
  'Calendar': 'Calendario',
  'Drag · scroll=zoom · Shift+scroll=pan': 'Trascina · rotella=zoom · Maiusc+rotella=sposta',
  'Events': 'Eventi',
  'Online': 'Online',
  'Offline': 'Offline',
  'Events · Recordings': 'Eventi · Registrazioni',
  'Loading…': 'Caricamento…',
  'new ✦': 'nuovo ✦',
  // tabs
  'Recent events': 'Eventi recenti',
  'Recordings': 'Registrazioni',
  'Clips': 'Clip',
  'Snapshots': 'Istantanee',
  'Reviews': 'Revisioni',
  'Kept events': 'Eventi salvati',
  'Kept': 'Salvati',
  // players
  'No recording for this period': 'Nessuna registrazione per questo periodo',
  'Mute': 'Disattiva audio',
  'Unmute': 'Attiva audio',
  'Download from': 'Scarica da',
  '↓ Download': '↓ Scarica',
  'Download clip': 'Scarica la clip',
  'Download snapshot': 'Scarica l’istantanea',
  'Could not save — check Frigate port config.': 'Impossibile salvare: controlla la porta di Frigate nella configurazione.',
  // filter panel and lists
  'Label': 'Etichetta',
  'Zone': 'Zona',
  'Show': 'Mostra',
  'All': 'Tutti',
  '★ Favorites': '★ Preferiti',
  'Recording': 'Registrazione',
  'Latest event': 'Ultimo evento',
  'clip': 'clip',
  'snap': 'foto',
  'No kept events': 'Nessun evento salvato',
  'star an event to keep it': 'metti la stella a un evento per salvarlo',
  'No events in this window': 'Nessun evento in questo periodo',
  '— end —': '— fine —',
  'scroll for older…': 'scorri per vedere i precedenti…',
  'No recordings in this window': 'Nessuna registrazione in questo periodo',
  '· click to seek': '· clicca per spostarti',
  'No reviews in this window': 'Nessuna revisione in questo periodo',
  '{n} to review': '{n} da rivedere',
  'Mark all': 'Segna tutte',
  'Hide reviewed': 'Nascondi le riviste',
  'Show reviewed': 'Mostra le riviste',
  'Nothing to review ✓': 'Niente da rivedere ✓',
  'tap': 'tocca',
  // editor
  'Tile {n} in the grid': 'Riquadro {n} nella griglia',
  'Select camera': 'Seleziona telecamera',
  'Display name (optional)': 'Nome visualizzato (facoltativo)',
  'Tile size in the grid': 'Dimensione del riquadro nella griglia',
  'Colour of this camera on the grid view timeline': 'Colore di questa telecamera nella timeline della griglia',
  'Back to the default colour': 'Torna al colore predefinito',
  'Remove': 'Rimuovi',
  '· Frigate cameras detected': '· telecamere Frigate trovate',
  '+ Add camera': '+ Aggiungi telecamera',
  'Grid layout': 'Disposizione della griglia',
  'The number is the tile the camera fills in the grid. Pick a camera that is already in another tile to swap the two.':
    'Il numero è il riquadro che la telecamera occupa nella griglia. Scegli una telecamera già presente in un altro riquadro per scambiare le due.',
  'Every camera in the grid streams at once, so more cameras means more load on the browser and on Frigate.':
    'Tutte le telecamere della griglia trasmettono insieme: più telecamere significano più carico sul browser e su Frigate.',
  'The numbers match the tile numbers beside each camera above. A layout sets the columns and the tile sizes together.':
    'I numeri corrispondono a quelli dei riquadri accanto a ogni telecamera qui sopra. Una disposizione imposta insieme colonne e dimensioni dei riquadri.',
  'On a phone, stack the cameras one per row': 'Sul telefono, metti le telecamere una per riga',
  'Any layout leaves the cameras too small to see on a phone, so this overrides it there. Turn it off to keep the grid on a phone too, for two cameras side by side or a small overview.':
    'Con qualsiasi disposizione le telecamere sul telefono risultano troppo piccole, quindi qui viene ignorata. Disattivala per mantenere la griglia anche sul telefono, per due telecamere affiancate o una piccola panoramica.',
  'Title (optional)': 'Titolo (facoltativo)',
  'My Camera': 'La mia telecamera',
  'Subtitle': 'Sottotitolo',
  'View': 'Vista',
  'Single camera': 'Telecamera singola',
  'Grid (all cams)': 'Griglia (tutte le telecamere)',
  'Time format': 'Formato dell’ora',
  'Follow Home Assistant': 'Come Home Assistant',
  '12-hour': '12 ore',
  '24-hour': '24 ore',
  'Auto-rotate on load': 'Rotazione automatica all’avvio',
  'Rotate interval (seconds, 0 = use default {n}s)': 'Intervallo di rotazione (secondi, 0 = predefinito {n} s)',
  'Theme': 'Tema',
  'Dark': 'Scuro',
  'Light': 'Chiaro',
  'Auto (browser)': 'Automatico (browser)',
  'Colors': 'Colori',
  'Custom accent': 'Colore d’accento personalizzato',
  'Custom background': 'Sfondo personalizzato',
  'Check the box to activate. Uncheck to revert to theme default.':
    'Spunta la casella per attivare. Togli la spunta per tornare al tema predefinito.',
  'Hidden tabs': 'Schede nascoste',
  'Grid columns': 'Colonne della griglia',
  'Automatic': 'Automatico',
  '1 (stacked)': '1 (in colonna)',
  'A camera can occupy more than one tile, so one can be shown larger than the rest. Automatic picks a column count from the number of cameras and the space available: on a tablet that comes to <b>{n}</b> per row. A phone stacks regardless, see below.':
    'Una telecamera può occupare più riquadri, quindi una può essere mostrata più grande delle altre. Automatico sceglie il numero di colonne in base alle telecamere e allo spazio disponibile: su un tablet sono <b>{n}</b> per riga. Il telefono le mette comunque in colonna, vedi sotto.',
  '1 camera': '1 telecamera',
  '{n} cameras': '{n} telecamere',
  'Events panel': 'Pannello eventi',
  'Start with the events panel hidden': 'Avvia con il pannello eventi nascosto',
  'On a wide card the events list sits beside the cameras. Hiding it gives the cameras the full width; a button on the card slides it back in.':
    'Su una card larga l’elenco eventi sta accanto alle telecamere. Nasconderlo dà alle telecamere tutta la larghezza; un pulsante sulla card lo fa riapparire.',
  'Live view provider': 'Sorgente della diretta',
  'Home Assistant stream': 'Flusso di Home Assistant',
  'go2rtc, low latency (experimental)': 'go2rtc, bassa latenza (sperimentale)',
  'go2rtc streams via Frigate\'s built-in WebRTC/MSE for much lower latency. Falls back to the Home Assistant stream automatically if it can\'t connect.':
    'go2rtc trasmette tramite WebRTC/MSE integrato in Frigate, con una latenza molto più bassa. Se non riesce a connettersi, passa automaticamente al flusso di Home Assistant.',
  'go2rtc transport': 'Trasporto go2rtc',
  'MSE (recommended)': 'MSE (consigliato)',
  'WebRTC only': 'Solo WebRTC',
  'MSE runs entirely over the proxied connection, so it works remotely and in the companion apps. WebRTC can be marginally faster but connects directly to go2rtc, which usually only resolves on the local network.':
    'MSE passa interamente dalla connessione tramite proxy, quindi funziona anche da remoto e nelle app companion. WebRTC può essere leggermente più veloce ma si collega direttamente a go2rtc, che di solito è raggiungibile solo nella rete locale.',
  'Maximum camera height': 'Altezza massima delle telecamere',
  'e.g. 70, blank = automatic': 'es. 70, vuoto = automatica',
  'As a percentage of the screen height. Leave empty to let the cameras size themselves; a grid uses at most 70% by default. Raise it for a wall display.':
    'In percentuale dell’altezza dello schermo. Lascia vuoto per far scegliere la dimensione alle telecamere; una griglia usa al massimo il 70% per impostazione predefinita. Aumentalo per un display a parete.',
  'Window hours': 'Ore mostrate nella timeline',
  'Language': 'Lingua',
  'Automatic (Home Assistant language)': 'Automatica (lingua di Home Assistant)',
  'fits the<br>camera count': 'si adatta alle<br>telecamere',
  // grid layouts
  '2 stacked': '2 in colonna',
  '2 side by side': '2 affiancate',
  '1 large + 2': '1 grande + 2',
  '1 large + 5': '1 grande + 5',
  '1 large + 7': '1 grande + 7',
  '2 large + 8': '2 grandi + 8',
};

// Detection labels as Frigate names them.
const IT_LABELS = {
  person: 'Persona', car: 'Auto', bicycle: 'Bicicletta', motorcycle: 'Moto',
  bus: 'Autobus', truck: 'Camion', boat: 'Barca', airplane: 'Aereo', train: 'Treno',
  bird: 'Uccello', cat: 'Gatto', dog: 'Cane', horse: 'Cavallo', sheep: 'Pecora',
  cow: 'Mucca', deer: 'Cervo', fox: 'Volpe', rabbit: 'Coniglio', squirrel: 'Scoiattolo',
  raccoon: 'Procione', package: 'Pacco', face: 'Volto', license_plate: 'Targa',
  waste_bin: 'Bidone', alert: 'Allarme', detection: 'Rilevamento',
  Recording: 'Registrazione',
};

// code → { name shown in the editor, strings, labels }
export const LANGS = {
  en: { name: 'English' },
  it: { name: 'Italiano', strings: IT, labels: IT_LABELS },
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
