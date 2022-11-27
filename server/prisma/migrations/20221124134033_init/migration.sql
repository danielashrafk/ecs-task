-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('GUEST', 'ADMIN');

-- CreateEnum
CREATE TYPE "WeekDays" AS ENUM ('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" "UserRole" NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Meal" (
    "id" TEXT NOT NULL,
    "day" "WeekDays" NOT NULL,
    "meal" TEXT NOT NULL,

    CONSTRAINT "Meal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MealAssignment" (
    "userId" TEXT NOT NULL,
    "mealId" TEXT NOT NULL,

    CONSTRAINT "MealAssignment_pkey" PRIMARY KEY ("userId","mealId")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "MealAssignment" ADD CONSTRAINT "MealAssignment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MealAssignment" ADD CONSTRAINT "MealAssignment_mealId_fkey" FOREIGN KEY ("mealId") REFERENCES "Meal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
