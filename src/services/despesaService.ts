import { Despesa } from "@prisma/client";
import dotenv from "dotenv";
import despesaRepository from "../repositories/despesaRepository.js";
import obrasRepository from "../repositories/obrasRepository.js";
import {
  notFoundError,
} from "../utils/errorUtils.js";

dotenv.config();

export type CreateDespesaData = Omit<Despesa, "id">;

async function createDespesa(createDespesaData: CreateDespesaData) {

const existingObra = await obrasRepository.findById(createDespesaData.obraId);
if (!existingObra) throw notFoundError("Obra not found");
  
 await despesaRepository.insert(createDespesaData);
}

async function findAll(obraId:number) {

  const despesas = await despesaRepository.findAll(obraId);

  return despesas;
}

 export default {
  createDespesa,
  findAll,

 };