import express from "express";
const app = express();
import productosRouter from "./routes/productos.js";

app.get("/health", function (req, res) {
  res.json({ status: "ok" });
});

app.use("/productos", productosRouter);

app.listen(3000);
