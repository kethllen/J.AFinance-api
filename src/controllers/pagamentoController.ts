import { Request, Response } from "express";
import pagamentoService from "../services/pagamentoService.js"

async function createPagamento(req: Request, res: Response) {
  const pagamento = req.body;

  await pagamentoService.createPagamento(pagamento);

  res.sendStatus(201);
}

async function findAllPagamentos(req: Request, res: Response) {
  const fechamentoId = parseInt(req.params.id);
  const pagamentos = await pagamentoService.findAll(fechamentoId);

  res.status(200).send(pagamentos);
}

export default{
  createPagamento,
  findAllPagamentos,
}