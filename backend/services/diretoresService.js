// importa o pool de conexão com o banco de dados (PostgreSQL)
import pool from "../config/db.js";

// importa dados mock de diretores (fallback quando banco falhar)
import diretoresMock from "../mock/diretores.json" with { type: "json" };

// função responsável por buscar todos os diretores
export async function getDiretores() {

  try {
    // executa query para buscar todos os diretores no banco
    const result = await pool.query("SELECT * FROM diretores");

    // retorna lista de diretores do banco
    return result.rows;

  } catch (error) {

    // log de erro caso falhe conexão com banco de dados
    console.error("Erro no DB, usando mock");

    // fallback usando dados estáticos (mock JSON)
    return diretoresMock;
  }
}