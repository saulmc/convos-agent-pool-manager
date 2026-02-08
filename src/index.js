import express from "express";

const PORT = parseInt(process.env.PORT || "3001", 10);
const app = express();
app.disable("x-powered-by");
app.use(express.json());

app.get("/healthz", (_req, res) => res.json({ ok: true }));

app.listen(PORT, () => {
  console.log(`Pool manager listening on :${PORT}`);
});
