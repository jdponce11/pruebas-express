const express = require("express");
const app = express();
const productosRouter = require("./routes/productos");

app.get("/health", function (req, res) {
  res.json({ status: "ok" });
});

app.use("/productos", productosRouter);

app.listen(3000);
