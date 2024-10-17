-- CreateTable
CREATE TABLE "college" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "college_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "company" (
    "id" SERIAL NOT NULL,
    "companyName" TEXT NOT NULL,
    "ctc" TEXT NOT NULL,
    "cutoff" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "collegeID" INTEGER NOT NULL,

    CONSTRAINT "company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "student" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "cgpa" TEXT NOT NULL,
    "collegeId" INTEGER NOT NULL,

    CONSTRAINT "student_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "college_name_key" ON "college"("name");

-- CreateIndex
CREATE UNIQUE INDEX "student_username_key" ON "student"("username");

-- AddForeignKey
ALTER TABLE "company" ADD CONSTRAINT "company_collegeID_fkey" FOREIGN KEY ("collegeID") REFERENCES "college"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "student" ADD CONSTRAINT "student_collegeId_fkey" FOREIGN KEY ("collegeId") REFERENCES "college"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
