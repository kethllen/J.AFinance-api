/*
  Warnings:

  - You are about to drop the column `fechaentoId` on the `pagamentos` table. All the data in the column will be lost.
  - Added the required column `fechamentoId` to the `pagamentos` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "pagamentos" DROP CONSTRAINT "pagamentos_fechaentoId_fkey";

-- AlterTable
ALTER TABLE "pagamentos" DROP COLUMN "fechaentoId",
ADD COLUMN     "fechamentoId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "pagamentos" ADD CONSTRAINT "pagamentos_fechamentoId_fkey" FOREIGN KEY ("fechamentoId") REFERENCES "fechamentos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
