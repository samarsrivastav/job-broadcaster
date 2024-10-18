-- CreateTable
CREATE TABLE "resume" (
    "id" SERIAL NOT NULL,
    "studentId" TEXT NOT NULL,
    "resume" BYTEA NOT NULL,

    CONSTRAINT "resume_pkey" PRIMARY KEY ("id")
);
