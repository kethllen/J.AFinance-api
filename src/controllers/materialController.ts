import { Request, Response } from "express";
import materialService from "../services/materialService.js"

async function createMaterial(req: Request, res: Response) {
  const material = req.body;

  await materialService.createMaterial(material);

  res.sendStatus(201);
}

async function findAllMateriais(req: Request, res: Response) {

  const materiais = await materialService.findAll();

  res.status(200).send(materiais);
}

export default{
  createMaterial,
  findAllMateriais,
}