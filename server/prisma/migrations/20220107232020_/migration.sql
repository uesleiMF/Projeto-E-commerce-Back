/*
  Warnings:

  - Added the required column `age` to the `Game` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ageInfo` to the `Game` table without a default value. This is not possible if the table is not empty.
  - Added the required column `studio` to the `Game` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Game" ADD COLUMN     "age" TEXT NOT NULL,
ADD COLUMN     "ageInfo" TEXT NOT NULL,
ADD COLUMN     "studio" TEXT NOT NULL;
