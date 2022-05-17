import { Request, Response } from "express";
import fechamentoService from "../services/fechamentoService.js"

async function createFechamento(req: Request, res: Response) {
  const fechamento = req.body;

  await fechamentoService.createFechamento(fechamento);

  res.sendStatus(201);
}

async function findAllFechamentos(req: Request, res: Response) {
  const obraId = parseInt(req.params.id);
  const fechamentos = await fechamentoService.findAll(obraId);

  res.status(200).send(fechamentos);
}

export default{
  createFechamento,
  findAllFechamentos,
}