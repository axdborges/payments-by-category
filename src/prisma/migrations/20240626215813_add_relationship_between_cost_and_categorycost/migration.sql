-- CreateEnum
CREATE TYPE "CategoryType" AS ENUM ('study', 'cost', 'taxes', 'investment', 'health', 'spending', 'donation');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "hasIncome" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CategoryCost" (
    "id" TEXT NOT NULL,
    "name" "CategoryType" NOT NULL,

    CONSTRAINT "CategoryCost_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cost" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "origin" TEXT,
    "category" "CategoryType" NOT NULL,
    "categoryId" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Cost_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Cost" ADD CONSTRAINT "Cost_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "CategoryCost"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
