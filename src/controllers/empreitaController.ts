import { Request, Response } from "express";
import empreitaService from "../services/empreitaService.js"

async function createEmpreita(req: Request, res: Response) {
  const empreita = req.body;

  await empreitaService.createEmpreita(empreita);

  res.sendStatus(201);
}

async function findAllEmpreitas(req: Request, res: Response) {
  const obraId = parseInt(req.params.obraid);
  const empreitas = await empreitaService.findAll(obraId);

  res.status(200).send(empreitas);
}

async function findEmpreita(req: Request, res: Response) {
  const id= parseInt(req.params.id)
  const empreita = await empreitaService.findById(id);

  res.status(200).send(empreita);
}
export default{
  createEmpreita,
  findAllEmpreitas,
  findEmpreita
}