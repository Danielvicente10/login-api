/*
  Warnings:

  - You are about to drop the `Empresa` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Employees" DROP CONSTRAINT "Employees_companyId_fkey";

-- DropForeignKey
ALTER TABLE "TimeRecord" DROP CONSTRAINT "TimeRecord_companyId_fkey";

-- DropTable
DROP TABLE "Empresa";

-- CreateTable
CREATE TABLE "Company" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "corporateName" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "phone" TEXT NOT NULL,
    "updateat" TIMESTAMP(3) NOT NULL,
    "deleted" BOOLEAN,
    "terminationDate" TIMESTAMP(3),

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Company_email_key" ON "Company"("email");

-- AddForeignKey
ALTER TABLE "Employees" ADD CONSTRAINT "Employees_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TimeRecord" ADD CONSTRAINT "TimeRecord_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
