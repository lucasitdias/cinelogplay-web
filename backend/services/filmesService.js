// importa o pool de conexão com o banco de dados (PostgreSQL)
import pool from "../config/db.js";

// importa dados mock de filmes (fallback quando banco falhar)
import filmesMock from "../mock/filmes.json" with { type: "json" };

// função responsável por buscar todos os filmes
export async function getFilmes() {

  try {
    // executa query para buscar todos os filmes no banco de dados
    const result = await pool.query("SELECT * FROM filmes");

    // retorna lista de filmes vindos do banco
    return result.rows;

  } catch (error) {

    // log de erro caso falhe a conexão com o banco de dados
    console.error("Erro no DB, usando mock");

    // fallback usando dados estáticos (mock JSON)
    return filmesMock;
  }
}