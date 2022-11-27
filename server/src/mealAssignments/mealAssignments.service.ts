import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaClient, MealAssignment, Meal } from '@prisma/client';
import { MealsService } from 'src/meals/meals.service';

const prisma = new PrismaClient();

@Injectable()
export class MealAssignmentsService {
  constructor(private readonly mealsService: MealsService) {}
  async getMealAssignments() {
    try {
      const mealAssignments = await prisma.mealAssignment.findMany();
      return { success: true, message: mealAssignments };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }

  async addMealAssignment(userId: string, meals: Partial<Meal>[]) {
    try {
      console.log(meals);
      const returnedAssignments = [];
      for (let i = 0; i < meals.length; i++) {
        const mealId = meals[i].id;

        const day = await (
          await this.mealsService.findMealById(mealId)
        ).message['day'];

        await prisma.mealAssignment.deleteMany({
          where: {
            userId: userId,
            meal: {
              day: day,
            },
          },
        });
        const newMealAssignment = await prisma.mealAssignment.create({
          data: {
            userId,
            mealId,
          },
        });
        returnedAssignments.push(newMealAssignment);
      }
      return { success: true, message: returnedAssignments };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }

  async findMealAssignment(userId: string, mealId: string) {
    try {
      const mealAssignment = await prisma.mealAssignment.findFirst({
        where: {
          userId: userId,
          mealId: mealId,
        },
      });
      if (!mealAssignment)
        throw new HttpException(
          'Cannot find meal assignment',
          HttpStatus.NOT_FOUND,
        );

      return { success: true, message: mealAssignment };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }
}
