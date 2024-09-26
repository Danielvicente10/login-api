/*
  Warnings:

  - You are about to drop the `Company` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Employees` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TimeRecord` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Employees" DROP CONSTRAINT "Employees_companyId_fkey";

-- DropForeignKey
ALTER TABLE "TimeRecord" DROP CONSTRAINT "TimeRecord_companyId_fkey";

-- DropForeignKey
ALTER TABLE "TimeRecord" DROP CONSTRAINT "TimeRecord_employeesId_fkey";

-- DropTable
DROP TABLE "Company";

-- DropTable
DROP TABLE "Employees";

-- DropTable
DROP TABLE "TimeRecord";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");
