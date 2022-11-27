import { Module } from '@nestjs/common';
import { MealsService } from './meals.service';
import { MealsResolver } from './meals.resolver';
import { MealExistsRule } from './dto/mealExists.dto';

@Module({
  controllers: [],
  providers: [MealsService, MealsResolver, MealExistsRule],
})
export class MealsModule {}
