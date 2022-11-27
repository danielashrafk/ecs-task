import { Field, InputType } from '@nestjs/graphql';
import { Meal } from '@prisma/client';
import { IsArray, IsNotEmpty, IsUUID, Validate } from 'class-validator';
import { MealExistsRule } from 'src/meals/dto/mealExists.dto';
import { UserExistsRule } from 'src/users/dto/userExists.dto';

@InputType()
export class createMealAssignmentDto {
  @Field()
  @IsNotEmpty()
  @IsUUID()
  @Validate(UserExistsRule)
  userId: string;
  @Field()
  @IsNotEmpty()
  @IsArray()
  meals: Partial<Meal>[];
}
