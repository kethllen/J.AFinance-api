import { prisma } from "../database.js";
import {CreatePagamentoData} from "../services/pagamentoService.js"


async function insert(createPagamentoData: CreatePagamentoData) {
  return prisma.pagamento.create({
    data: createPagamentoData,
  });
}

async function findAll(fechamentoId:number) {
  return prisma.pagamento.findMany({
    where:{
      fechamentoId,
    }
  });
}

export default{
  findAll,
  insert
}