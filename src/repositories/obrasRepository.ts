import { prisma } from "../database.js";
import {CreateObraData } from "../services/obrasService.js";

async function findById(id: number) {
  return prisma.obra.findUnique({
    where: {
      id,
    },
    include:{
      materiais:true,
      fechamentos:true,
      despesas:true,
    },
  });
}

async function updateValorAtual(id: number, valorAtual: number) {
  return prisma.obra.update({
    where: {
      id: id,
    },
    data: {
      valorAtual:{
        increment: valorAtual,
      }
    },
  });
}

async function insert(createObraData: CreateObraData) {
  return prisma.obra.create({
    data: createObraData,
  });
}
async function findByName(name: string) {
  return prisma.obra.findUnique({
    where: {
      name,
    },
  });
}
async function findAll() {
  return prisma.obra.findMany({});
}

export default{
  findAll,
  findById,
  insert,
  updateValorAtual,
  findByName,
}