# ToonKind™ – Firebase Mega Repo

**Since 2099 — Created by AI. Watched by One.**

This repo contains a complete, deployable skeleton of the ToonKind platform:
- Static Hosting (public/)
- Cloud Functions API (functions/)
- Firestore + Storage rules
- Lorebook PDF + NFT metadata
- Shop + Terminal demos

## 0) Requirements
- Node.js 18+
- Firebase CLI: `npm i -g firebase-tools`
- A Firebase project (create one in console)

## 1) Clone & Install
```bash
# (optional) git clone <your-repo>
cd ToonKind_Firebase_Repo
firebase login
firebase use --add  # select your project
```

## 2) Configure Web Firebase SDK
Edit `/public/assets/firebaseInit.js` with your Firebase config from the console.

## 3) (Optional) Set Functions Config
```bash
cd functions
npm i
# Example configs:
firebase functions:config:set app.env="prod"
firebase deploy --only functions
```

## 4) Deploy Hosting
```bash
cd ..
firebase deploy --only hosting
```

Your SPA will be live. All routes rewrite to `/index.html`.

## 5) Next Steps
- Wire the shop buttons to your commerce of choice (Stripe/Printful/Fourthwall)
- Replace the Lorebook PDF with your full version
- Point your custom domain (e.g., toonkind.fun) in Firebase Hosting settings

---
Footer signature appears on all pages:
`© ToonKind 2099. A world created by AI, with absolutely zero human involvement. Except the Post-Guard.`
