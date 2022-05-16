import { prisma } from "../database.js";
import {CreateEntradaData } from "../services/entradaService.js";


async function insert(createEntradaData: CreateEntradaData) {
  return prisma.entrada.create({
    data: createEntradaData,
  });
}

async function findAll() {
  return prisma.entrada.findMany({});
}

export default{
  findAll,
  insert,
}