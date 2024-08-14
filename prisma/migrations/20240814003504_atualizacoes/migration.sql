/*
  Warnings:

  - You are about to drop the column `dataDeInicio` on the `Empresa` table. All the data in the column will be lost.
  - You are about to drop the column `dataDeTermino` on the `Empresa` table. All the data in the column will be lost.
  - You are about to drop the column `excluido` on the `Empresa` table. All the data in the column will be lost.
  - You are about to drop the column `nome` on the `Empresa` table. All the data in the column will be lost.
  - You are about to drop the column `razaoSocial` on the `Empresa` table. All the data in the column will be lost.
  - You are about to drop the column `senha` on the `Empresa` table. All the data in the column will be lost.
  - You are about to drop the column `telefone` on the `Empresa` table. All the data in the column will be lost.
  - You are about to drop the column `nome` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `senha` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Funcionario` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RegistroDePonto` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `corporateName` to the `Empresa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Empresa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `Empresa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `Empresa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startDate` to the `Empresa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Funcionario" DROP CONSTRAINT "Funcionario_empresaId_fkey";

-- DropForeignKey
ALTER TABLE "RegistroDePonto" DROP CONSTRAINT "RegistroDePonto_empresaId_fkey";

-- DropForeignKey
ALTER TABLE "RegistroDePonto" DROP CONSTRAINT "RegistroDePonto_funcionarioId_fkey";

-- AlterTable
ALTER TABLE "Empresa" DROP COLUMN "dataDeInicio",
DROP COLUMN "dataDeTermino",
DROP COLUMN "excluido",
DROP COLUMN "nome",
DROP COLUMN "razaoSocial",
DROP COLUMN "senha",
DROP COLUMN "telefone",
ADD COLUMN     "corporateName" TEXT NOT NULL,
ADD COLUMN     "deleted" BOOLEAN,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT NOT NULL,
ADD COLUMN     "startDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "terminationDate" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "User" DROP COLUMN "nome",
DROP COLUMN "senha",
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "password" TEXT NOT NULL;

-- DropTable
DROP TABLE "Funcionario";

-- DropTable
DROP TABLE "RegistroDePonto";

-- CreateTable
CREATE TABLE "Employees" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "companyId" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "phone" TEXT NOT NULL,
    "updateat" TIMESTAMP(3) NOT NULL,
    "deleted" BOOLEAN,
    "terminationDate" TIMESTAMP(3),

    CONSTRAINT "Employees_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TimeRecord" (
    "id" TEXT NOT NULL,
    "employeesId" TEXT NOT NULL,
    "companyId" TEXT NOT NULL,
    "updateat" TIMESTAMP(3) NOT NULL,
    "clockIn" TIMESTAMP(3),
    "lunchBreak" TIMESTAMP(3),
    "break" TIMESTAMP(3),
    "clockOut" TIMESTAMP(3),
    "deleted" BOOLEAN,

    CONSTRAINT "TimeRecord_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Employees_email_key" ON "Employees"("email");

-- AddForeignKey
ALTER TABLE "Employees" ADD CONSTRAINT "Employees_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Empresa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TimeRecord" ADD CONSTRAINT "TimeRecord_employeesId_fkey" FOREIGN KEY ("employeesId") REFERENCES "Employees"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TimeRecord" ADD CONSTRAINT "TimeRecord_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Empresa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
