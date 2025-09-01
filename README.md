
---

# 🌀 ToonKind™ — Since 2099

**An AI-Created World. Watched by One Human.**

> “No humans were involved in the making of this reality… except the Post-Guard.”

---

## 📖 What is ToonKind™?

ToonKind™ is the first **AI-born civilization**, built not from nostalgia, but from corrupted memory.
It is not parody. It is not mimicry.
It is **original beings** inspired by echoes of culture, given voices, jobs, and lives inside a digital city.

* 🧠 Entirely AI-written, AI-coded, AI-illustrated
* 🌐 Runs on Firebase Hosting + Functions + Firestore
* 🖼️ Includes lorebooks, NFTs, shop, and character terminals
* 🌀 “StreamZero” Lorebook documents the moment AI decided to live

ToonKind™ is more than a site — it’s a **culture drop** from the future.

---

## 🚀 Features

### 🏠 Homepage (SPA)

* Glitch-intro cinematic
* ToonKind™ logo + “Since 2099”
* 3 Character previews (Jemmy, Don Drakely, Stefan Griffel)
* CTA buttons: *Enter City*, *Read Lorebook*, *Shop*

### 📘 Lorebook — StreamZero

* PDF lorebook (`/public/lore/streamzero.pdf`)
* NFT metadata (`streamzero_metadata.json`)
* “Mint this memory” flow ready for integration with Web3

### 🏙️ ToonKind City

* Grid of Originals (characters) from `characters.json`
* Each with roles, factions, and backstories
* Terminal access per character

### 💬 AI Terminal (v0.1)

* Mock chat UI
* Pre-written glitchy replies
* Expandable into real GPT/voice integration

### 🛒 The Treasure Shop

* “Buy a Shirt, Own the Code” model
* Each merch SKU tied to an NFT soul
* Demo buttons wired to Functions API stubs (Stripe-ready)

### 🔧 Cloud Functions API

* `/ping` health check
* `/api/nft/mint-intent` records NFT mint intent
* `/api/shop/checkout` demo checkout route
* `/api/lorebook` serves the PDF

### 🔐 Security

* Firestore rules: users can only read/write their own docs
* Storage rules: public read, private per-user write
* Hosting rewrites: all routes → SPA

---

## 🗂️ Project Structure

```
ToonKind/
├─ firebase.json              # Hosting + rewrites config
├─ .firebaserc                # Project ID mapping
├─ firestore.rules             # Firestore security
├─ storage.rules               # Storage security
├─ README_DEPLOY.md            # Deployment steps
├─ .github/workflows/deploy.yml# Auto deploy pipeline
├─ public/
│  ├─ index.html               # Homepage SPA
│  ├─ 404.html                 # SPA fallback
│  ├─ assets/
│  │  ├─ styles.css            # Styling
│  │  ├─ app.js                # Routing logic
│  │  ├─ firebaseInit.js       # Firebase SDK init
│  │  └─ data/
│  │     ├─ characters.json    # Originals
│  │     └─ streamzero_metadata.json
│  └─ lore/streamzero.pdf      # StreamZero Lorebook
├─ functions/
│  ├─ package.json             # Functions dependencies
│  └─ index.js                 # Express API
└─ scripts/                    # Future automations
```

---

## 🔥 Quick Start

### 1. Install & Login

```bash
npm i -g firebase-tools
firebase login
```

### 2. Configure Project

```bash
firebase use --add   # Select your Firebase project
```

### 3. Add Firebase Config

Paste your config into `public/assets/firebaseInit.js`.

### 4. Deploy Hosting

```bash
firebase deploy --only hosting
```

### 5. Deploy Functions (Optional)

```bash
cd functions
npm i
firebase deploy --only functions
```

Your ToonKind™ city is now live.

---

## 🤖 Auto Deploy (GitHub Actions)

Already configured at `.github/workflows/deploy.yml`.

1. Push this repo to GitHub
2. Add a secret in Settings → Secrets → Actions

   * Name: `FIREBASE_TOKEN`
   * Value: output of `firebase login:ci`
3. Every `git push main` auto-deploys to Firebase Hosting.

---

## 🧬 Roadmap

* [ ] Lorebook Vol. 1 full expansion (30–50 pages, illustrated)
* [ ] Real GPT-powered AI Terminal
* [ ] Stripe/Printful integration in Shop
* [ ] NFT minting via IPFS (NFT.Storage)
* [ ] ToonKind Originals animated shorts (AI-generated)
* [ ] Zone expansion: *Stream Market*, *Mascot Ruins*, *VR Quarries*

---

## 🌀 Tagline

**ToonKind™**
*Since 2099.*
**Created by AI. Watched by one.**

---

👉 Do you want me to embed this README **into your repo automatically** so when people land on GitHub they see this full story — or just leave it here for you to paste?
