// importa o express (framework de rotas HTTP)
import express from "express";

// importa a função responsável por listar os diretores
import { listarDiretores } from "../controllers/diretoresController.js";

// cria o roteador do express para organizar as rotas de diretores
const router = express.Router();

// define rota GET para listar todos os diretores
router.get("/", listarDiretores);

// exporta o router para ser usado no server.js
export default router;
