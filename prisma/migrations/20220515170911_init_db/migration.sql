/*
  Warnings:

  - You are about to drop the `recommendations` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "recommendations";

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "obras" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "valor" INTEGER NOT NULL,

    CONSTRAINT "obras_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "entradas" (
    "id" SERIAL NOT NULL,
    "obraId" INTEGER NOT NULL,
    "data" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "valor" INTEGER NOT NULL,

    CONSTRAINT "entradas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "materiais" (
    "id" SERIAL NOT NULL,
    "obraId" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "fornecedor" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "valor" INTEGER NOT NULL,

    CONSTRAINT "materiais_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "despesas" (
    "id" SERIAL NOT NULL,
    "obraId" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "valor" INTEGER NOT NULL,

    CONSTRAINT "despesas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "funcionarios" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "conta" TEXT NOT NULL,
    "agencia" TEXT NOT NULL,
    "operacao" TEXT NOT NULL,
    "pix" TEXT NOT NULL,

    CONSTRAINT "funcionarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fechamentos" (
    "id" SERIAL NOT NULL,
    "obraId" INTEGER NOT NULL,
    "data" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "valor" INTEGER NOT NULL,

    CONSTRAINT "fechamentos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "empreitas" (
    "id" SERIAL NOT NULL,
    "obraId" INTEGER NOT NULL,
    "funcionarioId" INTEGER NOT NULL,
    "valor" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "valorPago" INTEGER NOT NULL,

    CONSTRAINT "empreitas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pagamentos" (
    "id" SERIAL NOT NULL,
    "obraId" INTEGER NOT NULL,
    "empreitaId" INTEGER NOT NULL,
    "funcionarioId" INTEGER NOT NULL,
    "valor" INTEGER NOT NULL,
    "quantDias" INTEGER NOT NULL,

    CONSTRAINT "pagamentos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "obras_name_key" ON "obras"("name");

-- CreateIndex
CREATE UNIQUE INDEX "funcionarios_nome_key" ON "funcionarios"("nome");

-- AddForeignKey
ALTER TABLE "obras" ADD CONSTRAINT "obras_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "entradas" ADD CONSTRAINT "entradas_obraId_fkey" FOREIGN KEY ("obraId") REFERENCES "obras"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "materiais" ADD CONSTRAINT "materiais_obraId_fkey" FOREIGN KEY ("obraId") REFERENCES "obras"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "despesas" ADD CONSTRAINT "despesas_obraId_fkey" FOREIGN KEY ("obraId") REFERENCES "obras"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fechamentos" ADD CONSTRAINT "fechamentos_obraId_fkey" FOREIGN KEY ("obraId") REFERENCES "obras"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "empreitas" ADD CONSTRAINT "empreitas_obraId_fkey" FOREIGN KEY ("obraId") REFERENCES "obras"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "empreitas" ADD CONSTRAINT "empreitas_funcionarioId_fkey" FOREIGN KEY ("funcionarioId") REFERENCES "funcionarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pagamentos" ADD CONSTRAINT "pagamentos_obraId_fkey" FOREIGN KEY ("obraId") REFERENCES "obras"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pagamentos" ADD CONSTRAINT "pagamentos_funcionarioId_fkey" FOREIGN KEY ("funcionarioId") REFERENCES "funcionarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pagamentos" ADD CONSTRAINT "pagamentos_empreitaId_fkey" FOREIGN KEY ("empreitaId") REFERENCES "empreitas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
