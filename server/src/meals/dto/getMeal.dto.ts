import { ArgsType, Field } from '@nestjs/graphql';
import { WeekDays } from '@prisma/client';
import { IsEnum, IsNotEmpty } from 'class-validator';

@ArgsType()
export class getMealDto {
  @Field()
  @IsEnum(WeekDays)
  @IsNotEmpty()
  day: WeekDays;
}
