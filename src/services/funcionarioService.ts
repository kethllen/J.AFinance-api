import { Funcionario } from "@prisma/client";
import dotenv from "dotenv";
import funcionarioRepository from "../repositories/funcionarioRepository.js";

import {
  notFoundError,
  conflictError,
} from "../utils/errorUtils.js";
import dayjs from "dayjs";
dotenv.config();

export type CreateFuncionarioData = Omit<Funcionario, "id">;

async function createFuncionario(createFuncionarioData: CreateFuncionarioData) {

const existingFuncionario = await funcionarioRepository.findByName(createFuncionarioData.nome);
if (existingFuncionario ) throw conflictError("Name must be unique");
 
 await funcionarioRepository.insert({ ...createFuncionarioData});
}

async function findAll() {

  const funcionarios = await funcionarioRepository.findAll();

  return funcionarios;
}

async function findById(id:number) {

  const funcionario = await funcionarioRepository.findById(id);

  return funcionario;
}
 export default {
  createFuncionario,
  findAll,
  findById,
 };