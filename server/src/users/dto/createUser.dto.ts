import { Field, InputType } from '@nestjs/graphql';
import { UserRole } from '@prisma/client';
import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class createUserDto {
  @Field()
  @IsEmail()
  email: string;
  @Field()
  @IsNotEmpty()
  @IsEnum(UserRole)
  role: UserRole;
  @Field()
  @IsNotEmpty()
  @IsString()
  firstName: string;
  @Field()
  @IsNotEmpty()
  @IsString()
  lastName: string;
}
