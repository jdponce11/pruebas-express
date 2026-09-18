import express from "express";
const app = express();

import "dotenv/config";
import productosRouter from "./routes/productos";

app.use(express.json());

app.get("/health", function (req, res) {
  res.json({ status: "ok" });
});

app.use("/productos", productosRouter);

app.listen(3000);
