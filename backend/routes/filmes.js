// importa o express (framework de rotas HTTP)
import express from "express";

// importa a função responsável por buscar a lista de filmes
import { getFilmes } from "../controllers/filmesController.js";

// cria o roteador do express para organizar as rotas de filmes
const router = express.Router();

// define rota GET para retornar todos os filmes
router.get("/", getFilmes);

// exporta o router para ser usado no server.js
export default router;
