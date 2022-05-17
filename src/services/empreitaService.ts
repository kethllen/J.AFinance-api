import { Empreita } from "@prisma/client";
import dotenv from "dotenv";
import empreitaRepository from "../repositories/empreitaRepository.js";
import obrasRepository from "../repositories/obrasRepository.js";
import {
  notFoundError,
} from "../utils/errorUtils.js";

dotenv.config();

export type CreateEmpreitaData = Omit<Empreita, "id">;

async function createEmpreita(createEmpreitaData: CreateEmpreitaData) {

const existingObra = await obrasRepository.findById(createEmpreitaData.obraId);
if (!existingObra) throw notFoundError("Obra not found");
  
 await empreitaRepository.insert(createEmpreitaData);
}

async function findAll(obraId:number) {

  const empreitas = await empreitaRepository.findAll(obraId);

  return empreitas ;
}
async function findById(id:number) {

  const empreita= await empreitaRepository.findById(id);

  return empreita;
}
 export default {
  createEmpreita,
  findAll,
  findById,
 };