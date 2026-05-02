# SKT Dojo - Build, Run, Deploy

Questa guida spiega come compilare, avviare in locale e pubblicare il progetto.

## 1) Requisiti

- Node.js 18+ (consigliato)
- npm 9+ (consigliato)

Verifica versioni:

    node -v
    npm -v

## 2) Installazione dipendenze

Dalla cartella del progetto:

    npm install

## 3) Compilazione

Compila TypeScript e SCSS:

    npm run build

Risultato atteso:

- JavaScript compilato in dist/
- CSS compilato in assets/styles/main.css

Comandi utili separati:

    npm run styles
    npm run watch
    npm run styles:watch

## 4) Avvio locale (run)

Avvia il server Node statico:

    npm run serve

Poi apri nel browser:

    http://localhost:3000

Nota:
- Il server supporta URL tipo /home, /adulti, /contatti con fallback su index.html.

## 5) Deploy

Hai due strade principali.

### A) Deploy statico (consigliato)

Adatto a Netlify, Vercel static, GitHub Pages (con rewrite), Cloudflare Pages, ecc.

Passi:

1. Esegui build:

       npm ci
       npm run build

2. Pubblica questi contenuti:

   - index.html
   - dist/
   - assets/
   - eventuali altre cartelle statiche usate dal sito

3. Configura rewrite/fallback SPA:

   - tutte le route non-file (es. /home) devono rispondere con index.html

### B) Deploy con Node server

Adatto a VPS o PaaS che esegue Node.

Passi:

1. Sul server:

       npm ci
       npm run build

2. Avvio app:

       npm run serve

3. Porta:

   - il server usa PORT se presente
   - default locale: 3000

Esempio Linux:

    PORT=8080 npm run serve

## 6) Checklist rapida

- npm install completato
- npm run build senza errori
- npm run serve attivo
- apertura browser su localhost corretta
- in produzione: rewrite su index.html configurato
