import { Request, Response } from "express";
import obrasService from "../services/obrasService.js";

async function createObra(req: Request, res: Response) {
  const user = res.locals.user();
  const obra = req.body;

  await obrasService.createObra({userId: user.id, ...obra});

  res.sendStatus(201);
}

async function findAllObras(req: Request, res: Response) {

  const obras = await obrasService.findAll();

  res.status(200).send(obras);
}

export default{
  createObra,
  findAllObras,
}