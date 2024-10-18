-- AlterTable
ALTER TABLE "student" ADD COLUMN     "verified" BOOLEAN DEFAULT false;

-- CreateTable
CREATE TABLE "apply" (
    "id" SERIAL NOT NULL,
    "collegeId" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,
    "companyId" TEXT NOT NULL,

    CONSTRAINT "apply_pkey" PRIMARY KEY ("id")
);
