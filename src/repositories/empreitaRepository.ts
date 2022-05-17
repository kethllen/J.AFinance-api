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
    }
  });
}

export default{
  findAll,
  findById,
  insert,

}