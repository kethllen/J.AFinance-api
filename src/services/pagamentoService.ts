import { Pagamento } from "@prisma/client";
import dotenv from "dotenv";
import pagamentoRepository from "../repositories/pagamentoRepository.js";
import empreitaRepository from "../repositories/empreitaRepository.js";
import fechamentoRepository from "../repositories/fechamentoRepository.js";
import {
  notFoundError,
} from "../utils/errorUtils.js";

dotenv.config();

export type CreatePagamentoData = Omit<Pagamento, "id">;

async function createPagamento(createPagamentoData: CreatePagamentoData ) {

const existingEmpreita = await empreitaRepository.findById(createPagamentoData.empreitaId);
if (!existingEmpreita) throw notFoundError("Empreita not found");

const valorTotal = createPagamentoData.valor*createPagamentoData.quantDias;
 await pagamentoRepository.insert({...createPagamentoData, valorTotal});
 await empreitaRepository.updateValorAtual(createPagamentoData.empreitaId, valorTotal);
 await fechamentoRepository.updateValor(createPagamentoData.fechamentoId, valorTotal)
}

async function findAll(fechamentoId:number) {

  const pagamentos = await pagamentoRepository.findAll(fechamentoId);

  return pagamentos;
}

 export default {
  createPagamento,
  findAll,
 };