import { Args, Context, Mutation, Resolver, Query } from '@nestjs/graphql';
import { Response } from 'express';
import { RestaurantsService } from './restaurants.service';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from './guards/auth.guard';
import {
  RestaurantActivationDto,
  RestaurantRegisterDto,
} from './dto/restaurant.dto';
import {
  RestaurantActivationResponse,
  RestaurantLoginResponse,
  RestaurantLogoutResponse,
  RestaurantRegisterResponse,
} from './types/restaurant.type';

@Resolver('Restaurant')
export class RestaurantResolver {
  constructor(private readonly restaurantService: RestaurantsService) {}

  //   register restaurant
  @Mutation(() => RestaurantRegisterResponse)
  async registerRestaurant(
    @Args('registerDto') registerDto: RestaurantRegisterDto,
    @Context() context: { res: Response },
  ): Promise<RestaurantRegisterResponse> {
    const { message } = await this.restaurantService.registerRestaurant(
      registerDto,
      context.res,
    );
    return { message };
  }

  //   activate restaurant
  @Mutation(() => RestaurantRegisterResponse)
  async activateRestaurant(
    @Args('activationDto') activationDto: RestaurantActivationDto,
    @Context() context: { res: Response },
  ): Promise<RestaurantActivationResponse> {
    return this.restaurantService.activationRestaurant(
      activationDto,
      context.res,
    );
  }

  // login restaurant
  @Mutation(() => RestaurantActivationResponse)
  async LoginRestaurant(
    @Args('email') email: string,
    @Args('password') password: string,
  ): Promise<RestaurantLoginResponse> {
    return await this.restaurantService.LoginRestaurant({ email, password });
  }

  // get logged in restaurant
  @Query(() => RestaurantLoginResponse)
  @UseGuards(AuthGuard)
  async getLoggedInRestaurant(
    @Context() context: { req: Response },
  ): Promise<RestaurantLoginResponse> {
    return await this.restaurantService.getLoggedInRestaurant(context.req);
  }

  @Query(() => RestaurantLogoutResponse)
  @UseGuards(AuthGuard)
  async logOutRestaurant(@Context() context: { req: Request }) {
    return await this.restaurantService.LogoutRestaurant(context.req);
  }
}
