import { Request, Response } from "express";
import obrasService from "../services/obrasService.js";

async function createObra(req: Request, res: Response) {
  const user = res.locals.user;
  const obra = req.body;

  await obrasService.createObra({userId: user.id, ...obra});

  res.sendStatus(201);
}

async function findAllObras(req: Request, res: Response) {
  const user =parseInt(res.locals.user);
  const obras = await obrasService.findAll(user);

  res.status(200).send(obras);
}
async function findObra(req: Request, res: Response) {
  const id= parseInt(req.params.id)
  const obra = await obrasService.findById(id);

  res.status(200).send(obra);
}
export default{
  createObra,
  findAllObras,
  findObra,
}