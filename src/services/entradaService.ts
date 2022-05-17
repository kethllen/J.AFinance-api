import { Entrada } from "@prisma/client";
import dotenv from "dotenv";
import entradaRepository from "../repositories/entradaRepository.js";
import obrasRepository from "../repositories/obrasRepository.js";
import {
  notFoundError,
} from "../utils/errorUtils.js";
dotenv.config();

export type CreateEntradaData = Omit<Entrada, "id">;

async function createEntrada(createEntradaData: CreateEntradaData) {

  const existingObra = await obrasRepository.findById(createEntradaData.obraId);
  if (!existingObra) throw notFoundError("Obra not found");
  
  await entradaRepository.insert({ ...createEntradaData});
  await obrasRepository.updateValorAtual(createEntradaData.obraId, createEntradaData.valor );
}

async function findAll(obraId:number) {

  const entradas = await entradaRepository.findAll(obraId);

  return entradas;
}

 export default {
  createEntrada,
  findAll,

 };
