import { prisma } from "../database.js";
import {CreateEntradaData } from "../services/entradaService.js";


async function insert(createEntradaData: CreateEntradaData) {
  return prisma.entrada.create({
    data: createEntradaData,
  });
}

async function findAll(obraId:number) {
  
  return prisma.entrada.findMany({
    where:{
      obraId,
    }
  });
}

export default{
  findAll,
  insert,
}