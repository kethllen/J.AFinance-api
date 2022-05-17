/*
  Warnings:

  - You are about to drop the column `obraId` on the `pagamentos` table. All the data in the column will be lost.
  - Added the required column `fechaentoId` to the `pagamentos` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "pagamentos" DROP CONSTRAINT "pagamentos_obraId_fkey";

-- AlterTable
ALTER TABLE "pagamentos" DROP COLUMN "obraId",
ADD COLUMN     "fechaentoId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "pagamentos" ADD CONSTRAINT "pagamentos_fechaentoId_fkey" FOREIGN KEY ("fechaentoId") REFERENCES "fechamentos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
