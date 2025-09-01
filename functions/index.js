import functions from "firebase-functions";
import admin from "firebase-admin";
import express from "express";
import cors from "cors";

admin.initializeApp();
const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

app.get("/ping", (_, res) => res.json({ ok: true, message: "ToonKind API alive", ts: Date.now() }));

app.post("/api/nft/mint-intent", async (req, res) => {
  const { wallet, item } = req.body || {};
  // TODO: validate + write a Firestore record
  res.json({ ok: true, message: "Mint intent recorded (stub).", wallet, item });
});

app.post("/api/shop/checkout", async (req, res) => {
  // TODO: integrate Stripe/Fourthwall
  res.json({ ok: true, message: "Checkout created (demo stub)." });
});

app.get("/api/lorebook", async (req, res) => {
  res.json({ url: "/lore/streamzero.pdf" });
});

export const api = functions.https.onRequest(app);
