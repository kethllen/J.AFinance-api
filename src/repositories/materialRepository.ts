import { prisma } from "../database.js";
import {CreateMaterialData } from "../services/materialService.js";


async function insert(createMaterialData: CreateMaterialData ) {
  return prisma.material.create({
    data: createMaterialData,
  });
}

async function findAll(obraId:number) {
  return prisma.material.findMany({
    where:{
      obraId,
    }
  });
}

export default{
  findAll,
  insert,
}