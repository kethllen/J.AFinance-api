import { prisma } from "../database.js";
import {CreateEmpreitaData } from "../services/empreitaService.js";

async function findById(id: number) {
  return prisma.empreita.findUnique({
    where: {
      id,
    },
  });
}

async function insert(createEmpreitaData: CreateEmpreitaData) {
  return prisma.empreita.create({
    data: createEmpreitaData,
  });
}

async function findAll(obraId:number) {
  return prisma.empreita.findMany({
    where:{
      obraId,
    },
    include:{
      funcionario:true
    }
  });
}

async function updateValorAtual(id: number, valor: number) {
  return prisma.empreita.update({
    where: {
      id: id,
    },
    data: {
      valorPago:{
        increment: valor,
      }
    },
  });
}
export default{
  findAll,
  findById,
  insert,
  updateValorAtual,
}