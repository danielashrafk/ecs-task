import { ArgsType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsUUID } from 'class-validator';

@ArgsType()
export class getMealAssignmentDto {
  @Field()
  @IsUUID()
  @IsNotEmpty()
  userId: string;
  @Field()
  @IsUUID()
  @IsNotEmpty()
  mealId: string;
}
