import { Injectable } from '@nestjs/common';
import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { MealAssignmentsService } from 'src/mealAssignments/mealAssignments.service';

@ValidatorConstraint({ name: 'MealAssignmentExists', async: true })
@Injectable()
export class MealAssignmentExistsRule implements ValidatorConstraintInterface {
  constructor(private mealAssignmentsService: MealAssignmentsService) {}

  async validate(userId: string, args: ValidationArguments) {
    const [mealId] = args.constraints;
    const mealAssignment = await this.mealAssignmentsService.findMealAssignment(
      userId,
      mealId,
    );
    if (!mealAssignment['success']) return false;

    return true;
  }

  defaultMessage(args: ValidationArguments) {
    return `Meal Assignment doesn't exist`;
  }
}
