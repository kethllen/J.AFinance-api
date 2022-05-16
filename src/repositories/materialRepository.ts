import { prisma } from "../database.js";
import {CreateMaterialData } from "../services/materialService.js";


async function insert(createMaterialData: CreateMaterialData ) {
  return prisma.material.create({
    data: createMaterialData,
  });
}

async function findAll() {
  return prisma.material.findMany({});
}

export default{
  findAll,
  insert,
}