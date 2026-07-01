import express from "express";
import { getActivos } from "../services/productoService.js";
const router = express.Router();

router.get("/", async function (req, res) {
  try {
    const productos = await getActivos(1);
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener productos" });
  }
});

export default router;
