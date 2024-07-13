import { Args, Context, Query, Mutation, Resolver } from '@nestjs/graphql';
import { FoodsService } from './foods.service';
import {
  CreateFoodResponse,
  DeleteFoodResponse,
  LoggedInRestaurantReponse,
} from './types/foods.types';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '../guards/auth.guard';
import { CreateFoodDto, DeleteFoodDto } from './dto/foods.dto';

@Resolver('Foods')
export class FoodsResolver {
  constructor(private readonly foods: FoodsService) {}

  // create food
  @Mutation(() => CreateFoodResponse)
  @UseGuards(AuthGuard)
  async createFood(
    @Args('createFoodDto') createFoodDto: CreateFoodDto,
    @Context() context: { req: Request; res: Response },
  ) {
    return this.foods.createFood(createFoodDto, context.req, context.res);
  }

  //   get logged in restaurant
  @Query(() => LoggedInRestaurantReponse)
  @UseGuards(AuthGuard)
  async getLoggedInRestaurantFoods(
    @Context() context: { req: any; res: Response },
  ) {
    return await this.foods.getLoggedInRestaurantFood(context.req, context.res);
  }

  @Mutation(() => DeleteFoodResponse)
  @UseGuards(AuthGuard)
  async deleteFood(
    @Args('deleteFoodDto') deleteFoodDto: DeleteFoodDto,
    @Context() context: { req: any },
  ) {
    return this.foods.deleteFood(deleteFoodDto, context.req);
  }
}
