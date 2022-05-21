import { Fechamento } from "@prisma/client";
import dotenv from "dotenv";
import fechamentoRepository from "../repositories/fechamentoRepository.js";
import obrasRepository from "../repositories/obrasRepository.js";
import {
  notFoundError,
} from "../utils/errorUtils.js";
import dayjs from "dayjs";
dotenv.config();

export type CreateFechamentoData = Omit<Fechamento, "id">;

async function createFechamento(createFechamentoData: CreateFechamentoData) {

const existingObra = await obrasRepository.findById(createFechamentoData.obraId);
if (!existingObra) throw notFoundError("Obra not found");
  const name= existingObra.name+"-"+createFechamentoData.data;
 await fechamentoRepository.insert({ ...createFechamentoData, name, valor:0});
}

async function findAll(obraId:number) {

  const fechamentos = await fechamentoRepository.findAll(obraId);

  return fechamentos;
}

 export default {
  createFechamento,
  findAll,

 };