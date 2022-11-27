import { HttpException, HttpStatus } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Meal } from '@prisma/client';
import { createMealDto } from './dto/createMeal.dto';
import { getMealDto } from './dto/getMeal.dto';
import { MealsService } from './meals.service';

@Resolver('Meal')
export class MealsResolver {
  constructor(private readonly mealsService: MealsService) {}

  @Query()
  async getMeal(@Args() getMealArgs: getMealDto): Promise<Meal[]> {
    const meal = await this.mealsService.findMeal(getMealArgs.day);
    if (meal['success']) return meal['message'];
    else throw new HttpException('Cannot find meal', HttpStatus.BAD_REQUEST);
  }

  @Query()
  async getAllMeals(): Promise<Meal[]> {
    const meals = await this.mealsService.getMeals();
    if (meals['success']) return meals['message'];
    else throw new HttpException('Cannot get meals', HttpStatus.BAD_REQUEST);
  }

  @Mutation()
  async addMeal(@Args() createMealData: createMealDto): Promise<Meal> {
    const addedMeal = await this.mealsService.addMeal(createMealData);
    if (addedMeal['success']) return addedMeal['message'];
    else throw new HttpException('Cannot add Meal', HttpStatus.BAD_REQUEST);
  }
}
