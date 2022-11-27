import { HttpException, HttpStatus } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Meal, MealAssignment } from '@prisma/client';
import { createMealAssignmentDto } from './dto/createMealAssignment.dto';
import { getMealAssignmentDto } from './dto/getMealAssignment.dto';
import { MealAssignmentsService } from './mealAssignments.service';

@Resolver('MealAssignments')
export class MealAssignmentsResolver {
  constructor(
    private readonly mealAssignmentsService: MealAssignmentsService,
  ) {}

  @Query()
  async getMealAssignment(
    @Args() getMealAssignmentArgs: getMealAssignmentDto,
  ): Promise<MealAssignment> {
    const mealAssignment = await this.mealAssignmentsService.findMealAssignment(
      getMealAssignmentArgs.userId,
      getMealAssignmentArgs.mealId,
    );
    if (mealAssignment['success']) return mealAssignment['message'];
    else
      throw new HttpException(
        'Cannot find meal assignment',
        HttpStatus.BAD_REQUEST,
      );
  }

  @Query()
  async getAllMealAssignments(): Promise<MealAssignment[]> {
    const mealAssignments =
      await this.mealAssignmentsService.getMealAssignments();
    if (mealAssignments['success']) return mealAssignments['message'];
    else
      throw new HttpException(
        'Cannot get meal assignments',
        HttpStatus.BAD_REQUEST,
      );
  }

  @Mutation()
  async addMealAssignment(
    @Args() createMealAssignmentData: createMealAssignmentDto,
  ): Promise<MealAssignment[]> {
    const addedMealAssignment =
      await this.mealAssignmentsService.addMealAssignment(
        createMealAssignmentData.userId,
        createMealAssignmentData.meals,
      );
    if (addedMealAssignment['success']) return addedMealAssignment['message'];
    else
      throw new HttpException(
        'Cannot add Meal Assignment',
        HttpStatus.BAD_REQUEST,
      );
  }
}
