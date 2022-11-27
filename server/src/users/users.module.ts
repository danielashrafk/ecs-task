import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { UserExistsRule } from './dto/userExists.dto';
import { MealsService } from 'src/meals/meals.service';

@Module({
  controllers: [],
  providers: [UsersService, UsersResolver, UserExistsRule],
})
export class UsersModule {}
