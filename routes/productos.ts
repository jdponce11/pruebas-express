import express from "express";
import { getActivos } from "../services/productoService";
import { prisma } from "../lib/prisma";
const router = express.Router();

router.get("/", async function (req, res) {
  try {
    const productos = await getActivos(1);
    res.json(productos);
  } catch (error) {
    console.error("Error detallado:", error);
    res.status(500).json({ error: "Error al obtener productos" });
  }
});

router.post("/", async function (req, res) {
  const { empresa_id, nombre, categoria, cantidad } = req.body;
  //  if req.body includes empty field{
  return;
  //  } if not continue:
  //  validate with typescript if types are correct.
  // Consultar a la DB de empresas si la empresa existe
  //try {
  const producto = await prisma.producto.create({
    data: { empresa_id, nombre, categoria, cantidad },
  });

  res.status(201).json(producto);
  //} catch (error) {
  //   console.error("Error detallado:", error);
  //   if error == 500:
  //     then error server
  //   if error == 400:
  //      then error cliente
  //}
});

export default router;
