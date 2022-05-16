/*
  Warnings:

  - Added the required column `valorAtual` to the `obras` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "obras" ADD COLUMN     "valorAtual" INTEGER NOT NULL;
