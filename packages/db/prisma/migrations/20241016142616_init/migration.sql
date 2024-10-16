-- CreateTable
CREATE TABLE "college" (
    "Id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "college_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "company" (
    "Id" SERIAL NOT NULL,
    "companyName" TEXT NOT NULL,
    "CTC" TEXT NOT NULL,
    "Cutoff" TEXT NOT NULL,
    "collegeID" INTEGER NOT NULL,

    CONSTRAINT "company_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "student" (
    "Id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "cgpa" TEXT NOT NULL,
    "collegeId" INTEGER NOT NULL,

    CONSTRAINT "student_pkey" PRIMARY KEY ("Id")
);

-- CreateIndex
CREATE UNIQUE INDEX "college_name_key" ON "college"("name");

-- AddForeignKey
ALTER TABLE "company" ADD CONSTRAINT "company_collegeID_fkey" FOREIGN KEY ("collegeID") REFERENCES "college"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "student" ADD CONSTRAINT "student_collegeId_fkey" FOREIGN KEY ("collegeId") REFERENCES "college"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;
