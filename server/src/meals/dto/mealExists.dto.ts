import { Injectable } from '@nestjs/common';
import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { MealsService } from 'src/meals/meals.service';

@ValidatorConstraint({ name: 'MealExists', async: true })
@Injectable()
export class MealExistsRule implements ValidatorConstraintInterface {
  constructor(private mealsService: MealsService) {}

  async validate(mealId: string) {
    const meal = await this.mealsService.findMealById(mealId);
    if (!meal['success']) return false;

    return true;
  }

  defaultMessage(args: ValidationArguments) {
    return `Meal doesn't exist`;
  }
}
