import { Module } from '@nestjs/common';
import { MealAssignmentsService } from './mealAssignments.service';
import { MealAssignmentsResolver } from './mealAssignments.resolver';
import { MealAssignmentExistsRule } from './dto/mealAssignmentExists.dto';
import { MealsService } from 'src/meals/meals.service';

@Module({
  controllers: [],
  providers: [
    MealAssignmentsService,
    MealAssignmentsResolver,
    MealAssignmentExistsRule,
    MealsService,
  ],
})
export class MealAssignmentModule {}
