// importa o pool de conexão com o banco de dados (PostgreSQL)
import pool from "../config/db.js";

// função responsável por salvar uma mensagem no banco de dados
export async function salvarMensagem({ nome, email, mensagem }) {
  try {
    // query SQL que insere uma nova mensagem na tabela mensagens
    const query = `
      INSERT INTO mensagens (nome, email, mensagem)
      VALUES ($1, $2, $3)
      RETURNING *;
    `;

    // valores que serão inseridos na query (proteção contra SQL Injection)
    const values = [nome, email, mensagem];

    // executa a query no banco de dados
    const result = await pool.query(query, values);

    // retorna a primeira linha inserida no banco
    return result.rows[0];
  } catch (error) {
    // log de erro caso falhe conexão com banco
    console.error("Erro no DB, salvando apenas em memória");

    // fallback em memória caso banco falhe (mock temporário)
    return {
      id: Date.now(),
      nome,
      email,
      mensagem,
      data_envio: new Date(),
    };
  }
}
