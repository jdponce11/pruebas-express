import { prisma } from "../lib/prisma";

export async function getActivos(empresaId) {
  const allActivos = await prisma.producto.findMany({
    where: { empresa_id: empresaId, archivado: 0 },
  });
  return allActivos;
}
