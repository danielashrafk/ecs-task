import { Field, InputType } from '@nestjs/graphql';
import { UserRole, WeekDays } from '@prisma/client';
import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class createMealDto {
  @Field()
  @IsEnum(WeekDays)
  day: WeekDays;
  @Field()
  @IsNotEmpty()
  @IsString()
  meal: string;
}
