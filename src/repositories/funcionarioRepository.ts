import { prisma } from "../database.js";
import {CreateFuncionarioData } from "../services/funcionarioService.js";

async function findById(id: number) {
  return prisma.funcionario.findUnique({
    where: {
      id,
    },
     include:{
      pagamentos:true
    }
  });
}

async function insert(createFuncionarioData: CreateFuncionarioData) {
  return prisma.funcionario.create({
    data: createFuncionarioData,
  });
}
async function findByName(nome: string) {
  return prisma.funcionario.findUnique({
    where: {
      nome,
    },
  });
}
async function findAll() {
  return prisma.funcionario.findMany({});
}

export default{
  findAll,
  findById,
  insert,
  findByName,
}