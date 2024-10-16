/*
  Warnings:

  - A unique constraint covering the columns `[username]` on the table `student` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `username` to the `student` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "student" ADD COLUMN     "username" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "student_username_key" ON "student"("username");
