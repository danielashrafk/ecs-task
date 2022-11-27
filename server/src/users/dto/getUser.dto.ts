import { ArgsType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@ArgsType()
export class getUserDto {
  @Field()
  @IsString()
  @IsNotEmpty()
  id: string;
}
