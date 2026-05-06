// importa o pacote pg (PostgreSQL client para Node.js)
import pkg from "pg";

// importa dotenv (carrega variáveis de ambiente do arquivo .env)
import dotenv from "dotenv";

// carrega as variáveis de ambiente do projeto
dotenv.config();

// extrai o Pool do pacote pg (responsável pelas conexões com o banco)
const { Pool } = pkg;

// cria o pool de conexão com o banco de dados PostgreSQL
const pool = new Pool({
  // host do banco (ex: localhost ou serviço externo)
  host: process.env.DB_HOST,

  // porta do banco de dados
  port: Number(process.env.DB_PORT),

  // usuário do banco
  user: process.env.DB_USER,

  // senha do banco
  password: process.env.DB_PASSWORD,

  // nome do banco de dados
  database: process.env.DB_NAME,
});

// exporta o pool para ser usado nas queries da aplicação
export default pool;
