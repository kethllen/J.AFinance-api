import { prisma } from "../database.js";
import {CreateFechamentoData} from "../services/fechamentoService.js"


async function insert(createFechamentoData: CreateFechamentoData) {
  return prisma.fechamento.create({
    data: createFechamentoData,
  });
}

async function findAll(obraId:number) {
  return prisma.fechamento.findMany({
    where:{
      obraId,
    },
    include:{
      pagamentos:{
        include:{
          funcionario:true
        }
      }
    },
  });
}

async function findById(id: number) {
  return prisma.fechamento.findUnique({
    where: {
      id,
    },
    include:{
      pagamentos:true
    }
  });
}


export default{
  findAll,
  insert,
  findById
}