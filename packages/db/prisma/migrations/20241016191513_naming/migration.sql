/*
  Warnings:

  - The primary key for the `college` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Id` on the `college` table. All the data in the column will be lost.
  - The primary key for the `company` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `CTC` on the `company` table. All the data in the column will be lost.
  - You are about to drop the column `Cutoff` on the `company` table. All the data in the column will be lost.
  - You are about to drop the column `Id` on the `company` table. All the data in the column will be lost.
  - You are about to drop the column `Link` on the `company` table. All the data in the column will be lost.
  - The primary key for the `student` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Id` on the `student` table. All the data in the column will be lost.
  - Added the required column `ctc` to the `company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cutoff` to the `company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `link` to the `company` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "company" DROP CONSTRAINT "company_collegeID_fkey";

-- DropForeignKey
ALTER TABLE "student" DROP CONSTRAINT "student_collegeId_fkey";

-- AlterTable
ALTER TABLE "college" DROP CONSTRAINT "college_pkey",
DROP COLUMN "Id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "college_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "company" DROP CONSTRAINT "company_pkey",
DROP COLUMN "CTC",
DROP COLUMN "Cutoff",
DROP COLUMN "Id",
DROP COLUMN "Link",
ADD COLUMN     "ctc" TEXT NOT NULL,
ADD COLUMN     "cutoff" TEXT NOT NULL,
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "link" TEXT NOT NULL,
ADD CONSTRAINT "company_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "student" DROP CONSTRAINT "student_pkey",
DROP COLUMN "Id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "student_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "company" ADD CONSTRAINT "company_collegeID_fkey" FOREIGN KEY ("collegeID") REFERENCES "college"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "student" ADD CONSTRAINT "student_collegeId_fkey" FOREIGN KEY ("collegeId") REFERENCES "college"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
