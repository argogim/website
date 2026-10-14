# ARGO-GIM Website

Sito ufficiale di presentazione del progetto **ARGO-GIM** (*Inside insight*): una capsula ingeribile per conoscere e seguire nel tempo la salute dell'intestino, a casa e senza preparazione intestinale.

Sviluppato con **Next.js (App Router)**, **TypeScript**, **React 19** e styling con variabili CSS dedicate.

---

## 🛠️ Stack Tecnologico

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Linguaggio**: [TypeScript](https://www.typescriptlang.org/) (.tsx)
- **UI & Icone**: [React 19](https://react.dev/), [Lucide React](https://lucide.dev/)
- **Design & Styling**: Vanilla CSS con design tokens e transizioni fluide (`globals.css`)
- **Internazionalizzazione (i18n)**: Supporto bilingue integrato (Italiano / Inglese) con persistenza locale
- **Hosting & CI/CD**: [Vercel](https://vercel.com/) con auto-deploy su push

---

## 🚀 Sviluppo Locale

Per avviare il server di sviluppo locale:

```bash
npm install
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000) nel browser per visualizzare il sito.

---

## 📦 Build di Produzione

```bash
npm run build
npm run start
```

---

## 🌐 Deploy su Vercel

Il repository è configurato per il deploy automatico su Vercel:
- **Framework Preset**: Next.js (rilevato automaticamente)
- **Root Directory**: `./`
- **Build Command**: `next build`
- **Output Directory**: `.next`
