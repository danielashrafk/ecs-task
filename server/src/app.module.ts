import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MealAssignmentExistsRule } from './mealAssignments/dto/mealAssignmentExists.dto';
import { MealAssignmentModule } from './mealAssignments/mealAssignments.module';
import { MealAssignmentsService } from './mealAssignments/mealAssignments.service';
import { MealExistsRule } from './meals/dto/mealExists.dto';
import { MealsModule } from './meals/meals.module';
import { MealsService } from './meals/meals.service';
import { UserExistsRule } from './users/dto/userExists.dto';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/users.service';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./src/graphql/schema.gql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql/graphql.ts'),
      },
    }),
    UsersModule,
    MealsModule,
    MealAssignmentModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    UsersService,
    UserExistsRule,
    MealsService,
    MealExistsRule,
    MealAssignmentsService,
    MealAssignmentExistsRule,
  ],
})
export class AppModule {}
