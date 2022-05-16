import { Obra } from "@prisma/client";
import dotenv from "dotenv";
import obrasRepository from "../repositories/obrasRepository.js";
import {
  conflictError,
  notFoundError,
  unauthorizedError,
} from "../utils/errorUtils.js";
dotenv.config();

export type CreateObraData = Omit<Obra, "id">;

async function createObra(createUserData: CreateObraData) {

   const existingUser = await obrasRepository.findByName(createUserData.name);
   if (existingUser) throw conflictError("Name must be unique");

   await obrasRepository.insert({ ...createUserData});
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
