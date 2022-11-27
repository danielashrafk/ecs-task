import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaClient, Meal, WeekDays } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class MealsService {
  async getMeals() {
    try {
      const meals = await prisma.meal.findMany();
      return { success: true, message: meals };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }

  async addMeal({ day, meal }: Partial<Meal>) {
    try {
      const newMeal = await prisma.meal.create({
        data: {
          day,
          meal,
        },
      });

      return { success: true, message: newMeal };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }

  async findMeal(day: WeekDays) {
    try {
      const meal = await prisma.meal.findMany({
        where: {
          day: day,
        },
      });
      if (!meal)
        throw new HttpException('Cannot find meals', HttpStatus.NOT_FOUND);
      return { success: true, message: meal };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }

  async findMealById(mealId: string) {
    try {
      const meal = await prisma.meal.findFirst({
        where: {
          id: mealId,
        },
      });
      if (!meal)
        throw new HttpException('Cannot find meal', HttpStatus.NOT_FOUND);
      return { success: true, message: meal };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }
}
