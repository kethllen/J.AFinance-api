import { Obra } from "@prisma/client";
import dotenv from "dotenv";
import obrasRepository from "../repositories/obrasRepository.js";
import empreitaRepository from "../repositories/empreitaRepository.js";
import {
  conflictError,
  notFoundError,
  unauthorizedError,
} from "../utils/errorUtils.js";
import { CreateEmpreitaData } from "./empreitaService.js";
dotenv.config();

export type CreateObraData = Omit<Obra, "id">;

async function createObra(createUserData: CreateObraData) {
  

  const existingUser = await obrasRepository.findByName(createUserData.name);
   if (existingUser) throw conflictError("Name must be unique");

   await obrasRepository.insert({ ...createUserData});
   const obra = await obrasRepository.findByName(createUserData.name);
   const diarista : CreateEmpreitaData = {
    obraId: obra.id,
    funcionarioId: 1,
    valor: 0,
    description: "DIARISTA",
    valorPago:0
  }
   await empreitaRepository.insert(diarista)
}

async function findById(id:number) {

  const obra = await obrasRepository.findById(id);
  if (!obra) throw notFoundError("Obra not found");

  return obra;
}
async function findAll() {

  const obras = await obrasRepository.findAll();

  return obras;
}

async function updateValorAtual(id:number, valorAtual:number) {

  await obrasRepository.updateValorAtual(id, valorAtual);

}
 export default {
  createObra,
  findById,
  findAll,
  updateValorAtual,
 };
