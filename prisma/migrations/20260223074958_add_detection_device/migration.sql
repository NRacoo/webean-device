/*
  Warnings:

  - Added the required column `totalBaik` to the `Detection_records` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalCacat` to the `Detection_records` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Detection_records" ADD COLUMN     "totalBaik" INTEGER NOT NULL,
ADD COLUMN     "totalCacat" INTEGER NOT NULL;
