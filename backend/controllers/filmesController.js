// importa a função responsável por buscar filmes no service
import { getFilmes as getFilmesService } from "../services/filmesService.js";

// controller responsável por listar todos os filmes
export async function getFilmes(req, res) {
  // busca os filmes (banco ou mock fallback)
  const filmes = await getFilmesService();

  // retorna os filmes em formato JSON
  res.json(filmes);
}