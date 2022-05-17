import { Pagamento } from "@prisma/client";
import dotenv from "dotenv";
import pagamentoRepository from "../repositories/pagamentoRepository.js";
import empreitaRepository from "../repositories/empreitaRepository.js";
import {
  notFoundError,
} from "../utils/errorUtils.js";

dotenv.config();

export type CreatePagamentoData = Omit<Pagamento, "id">;

async function createPagamento(createPagamentoData: CreatePagamentoData ) {
if(createPagamentoData.empreitaId!==0)
{
  const existingEmpreita = await empreitaRepository.findById(createPagamentoData.empreitaId);
  if (!existingEmpreita) throw notFoundError("Empreita not found");
}
const valorTotal = createPagamentoData.valor*createPagamentoData.quantDias;
 await pagamentoRepository.insert({...createPagamentoData, valorTotal});
 await empreitaRepository.updateValorAtual(createPagamentoData.empreitaId, valorTotal)
}

async function findAll(fechamentoId:number) {

  const pagamentos = await pagamentoRepository.findAll(fechamentoId);

  return pagamentos;
}

 export default {
  createPagamento,
  findAll,
 };