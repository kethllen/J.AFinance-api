import { Request, Response } from "express";
import despesaService from "../services/despesaService.js"

async function createDespesa(req: Request, res: Response) {
  const despesa = req.body;

  await despesaService.createDespesa(despesa);

  res.sendStatus(201);
}

async function findAllDespesas(req: Request, res: Response) {
  const obraId = parseInt(req.params.id);
  const despesas = await despesaService.findAll(obraId);

  res.status(200).send(despesas);
}

export default{
  createDespesa,
  findAllDespesas,
}