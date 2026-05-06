// Importa o framework Express
import express from "express";

// Importa o middleware CORS para controle de acesso
import cors from "cors";

// Importa o dotenv para carregar variáveis de ambiente
import dotenv from "dotenv";

// Importa as rotas de filmes
import filmesRoutes from "./routes/filmes.js";

// Importa as rotas de diretores
import diretoresRoutes from "./routes/diretores.js";

// Importa as rotas de contato
import contatoRoutes from "./routes/contato.js";

// Carregar variáveis de ambiente do arquivo .env
dotenv.config();

// Cria a aplicação Express
const app = express();

// Define a porta do servidor (padrão 3001 se não houver variável de ambiente)
const PORT = process.env.PORT || 3001;

// Define o host do servidor (padrão 0.0.0.0 se não houver variável de ambiente)
const HOST = process.env.HOST || "0.0.0.0";

// MIDDLEWARE

// Configurações do CORS
const corsOptions = {
  // Define as origens permitidas (do .env ou localhost)
  origin: process.env.CORS_ORIGIN?.split(",") || ["http://localhost:5173"],
  // Define os métodos HTTP permitidos
  methods: ["GET", "POST", "PUT", "DELETE"],
  // Permite envio de cookies e credenciais
  credentials: true,
};

// Aplica o middleware CORS com as opções configuradas
app.use(cors(corsOptions));

// Middleware Body Parser para JSON
app.use(express.json());

// Middleware Body Parser para dados de formulário (URL-encoded)
app.use(express.urlencoded({ extended: true }));

// HEALTH CHECK

// Rota raiz para verificar se o servidor está operacional
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "CinelogPlay API — Servidor operacional",
    version: "1.0.0",
  });
});

// ROTAS

// Usa as rotas de filmes no caminho /api/filmes
app.use("/api/filmes", filmesRoutes);

// Usa as rotas de diretores no caminho /api/diretores
app.use("/api/diretores", diretoresRoutes);

// Usa as rotas de contato no caminho /api/contato
app.use("/api/contato", contatoRoutes);

// TRATAMENTO DE ERROS

// Middleware para tratar rotas não encontradas (404)
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: "Rota não encontrada",
    path: req.path,
  });
});

// Middleware para tratar erros globais
app.use((err, req, res, next) => {
  console.error("Error:", err);
  res.status(err.status || 500).json({
    success: false,
    error: err.message || "Erro interno do servidor",
  });
});

// INICIAR SERVIDOR

// Inicia o servidor na porta e host definidos
app.listen(PORT, HOST, () => {
  console.log(` CinelogPlay API rodando em http://${HOST}:${PORT}`);
  console.log(` Documentação: http://${HOST}:${PORT}/api/docs`);
});

// Exporta a aplicação para uso externo (ex: testes)
export default app;
