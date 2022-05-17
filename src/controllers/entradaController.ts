import { Request, Response } from "express";
import entradaService from "../services/entradaService.js"

async function createEntrada(req: Request, res: Response) {
  const entrada = req.body;

  await entradaService.createEntrada(entrada);

  res.sendStatus(201);
}

async function findAllEntradas(req: Request, res: Response) {
  const obraId = parseInt(req.params.id);
  const entradas = await entradaService.findAll(obraId);

  res.status(200).send(entradas);
}

export default{
  createEntrada,
  findAllEntradas,
}