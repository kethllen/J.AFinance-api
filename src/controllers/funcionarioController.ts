import { Request, Response } from "express";
import funcionarioService from "../services/funcionarioService.js"

async function createFuncionario(req: Request, res: Response) {
  const funcionario = req.body;

  await funcionarioService.createFuncionario(funcionario);

  res.sendStatus(201);
}

async function updateFuncionario(req: Request, res: Response) {
  const id= parseInt(req.params.id)
  const funcionario = req.body;

  await funcionarioService.updateFuncionario(id, funcionario);

  res.sendStatus(201);
}


async function findAllFuncionarios(req: Request, res: Response) {
 
  const funcionarios = await funcionarioService.findAll();

  res.status(200).send(funcionarios);
}

async function findFuncionario(req: Request, res: Response) {
  const id= parseInt(req.params.id)
  const funcionario = await funcionarioService.findById(id);

  res.status(200).send(funcionario);
}
export default{
  createFuncionario,
  findAllFuncionarios,
  findFuncionario,
  updateFuncionario
}