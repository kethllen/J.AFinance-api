import { Material } from "@prisma/client";
import dotenv from "dotenv";
import materialRepository from "../repositories/materialRepository.js";
import obrasRepository from "../repositories/obrasRepository.js";
import {
  notFoundError,
} from "../utils/errorUtils.js";
dotenv.config();

export type CreateMaterialData = Omit<Material, "id">;

async function createMaterial(createMaterialData: CreateMaterialData ) {

  const existingObra = await obrasRepository.findById(createMaterialData.obraId);
  if (!existingObra) throw notFoundError("Obra not found");
  
  await materialRepository.insert({ ...createMaterialData});

}

async function findAll() {

  const materiais = await materialRepository.findAll();

  return materiais;
}

 export default {
  createMaterial,
  findAll,

 };
