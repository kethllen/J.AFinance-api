import { Request, Response } from "express";
import entradaService from "../services/entradaService.js"

async function createEntrada(req: Request, res: Response) {
  const entrada = req.body;

  await entradaService.createEntrada(entrada);

  res.sendStatus(201);
}

async function findAllEntradas(req: Request, res: Response) {

  const entradas = await entradaService.findAll();

  res.status(200).send(entradas);
}

export default{
  createEntrada,
  findAllEntradas,
}