import { prisma } from "../database.js";

async function truncate() {
  await prisma.$executeRaw`
  TRUNCATE TABLE obras RESTART IDENTITY CASCADE;
  TRUNCATE TABLE despesas RESTART IDENTITY CASCADE;
  TRUNCATE TABLE empreitas RESTART IDENTITY CASCADE;
  TRUNCATE TABLE fechamentos RESTART IDENTITY CASCADE;
  TRUNCATE TABLE pagamentos RESTART IDENTITY CASCADE;
  TRUNCATE TABLE entradas RESTART IDENTITY CASCADE;
  TRUNCATE TABLE materiais RESTART IDENTITY CASCADE;
  TRUNCATE TABLE funcionarios RESTART IDENTITY CASCADE;
  `;
}
async function seed() {
  await prisma.funcionario.create({
    data:{
      nome: "Diarista",
      conta: "0",
      agencia: "0",
      operacao: "0",
      pix: "0",
    }
  });
}


export const testsRepository  ={
  truncate,
  seed
};