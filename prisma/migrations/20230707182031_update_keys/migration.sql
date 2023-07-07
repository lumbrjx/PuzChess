/*
  Warnings:

  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.
  - Made the column `badge` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `User` ADD COLUMN `password` VARCHAR(191) NOT NULL,
    MODIFY `badge` ENUM('ROCKIE', 'SILVER', 'GOLDEN', 'DIAMOND', 'PLATINIUM') NOT NULL DEFAULT 'ROCKIE';
