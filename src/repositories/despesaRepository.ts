import { prisma } from "../database.js";
import {CreateDespesaData } from "../services/despesaService.js";


async function insert(createDespesaData: CreateDespesaData) {
  return prisma.despesa.create({
    data: createDespesaData,
  });
}

async function findAll(obraId:number) {
  
  return prisma.despesa.findMany({
    where:{
      obraId,
    }
  });
}

export default{
  findAll,
  insert,
}