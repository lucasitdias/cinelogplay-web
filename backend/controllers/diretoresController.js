// importa a função responsável por buscar diretores no service
import { getDiretores } from "../services/diretoresService.js";

// controller responsável por listar todos os diretores
export async function listarDiretores(req, res) {
  // busca os diretores (banco ou mock fallback)
  const diretores = await getDiretores();

  // retorna os diretores em formato JSON
  res.json(diretores);
}