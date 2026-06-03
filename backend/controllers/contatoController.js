// importa a função responsável por salvar a mensagem (service)
import { salvarMensagem } from "../services/contatoService.js";

// controller responsável por receber e processar envio de mensagem de contato
export async function enviarMensagem(req, res) {

  try {
    // extrai os dados enviados no corpo da requisição
    const { nome, email, mensagem } = req.body;

    // valida se todos os campos obrigatórios foram preenchidos
    if (!nome || !email || !mensagem) {

      // retorna erro 400 (bad request) caso algum campo esteja vazio
      return res.status(400).json({
        error: "Todos os campos são obrigatórios",
      });
    }

    // chama o service responsável por salvar a mensagem (DB ou fallback mock)
    const resultado = await salvarMensagem({ nome, email, mensagem });

    // retorna resposta de sucesso com status 201 (created)
    res.status(201).json({
      message: "Mensagem enviada com sucesso",
      data: resultado,
    });

  } catch (error) {

    // exibe erro no terminal para depuração
    console.error(error);

    // retorna erro genérico caso algo falhe no servidor
    res.status(500).json({
      error: "Erro ao enviar mensagem",
    });
  }
}