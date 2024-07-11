import { Args, Context, Mutation, Resolver, Query } from '@nestjs/graphql';
import {
  ActivationResponse,
  LoginResponse,
  LogoutResponse,
  RegisterResponse,
} from './types/restaurant.type';
import { ActivationDto, RegisterDto } from './dto/restaurant.dto';
import { Response } from 'express';
import { RestaurantsService } from './restaurants.service';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from './guards/auth.guard';

@Resolver('Restaurant')
export class RestaurantResolver {
  constructor(private readonly restaurantService: RestaurantsService) {}

  //   register restaurant
  @Mutation(() => RegisterResponse)
  async registerRestaurant(
    @Args('registerDto') registerDto: RegisterDto,
    @Context() context: { res: Response },
  ): Promise<RegisterResponse> {
    const { message } = await this.restaurantService.registerRestaurant(
      registerDto,
      context.res,
    );
    return { message };
  }

  //   activate restaurant
  @Mutation(() => ActivationResponse)
  async activateRestaurant(
    @Args('activationDto') activationDto: ActivationDto,
    @Context() context: { res: Response },
  ): Promise<ActivationResponse> {
    return this.restaurantService.activationRestaurant(
      activationDto,
      context.res,
    );
  }

  // login restaurant
  @Mutation(() => LoginResponse)
  async LoginRestaurant(
    @Args('email') email: string,
    @Args('password') password: string,
  ): Promise<LoginResponse> {
    return await this.restaurantService.LoginRestaurant({ email, password });
  }

  // get logged in restaurant
  @Query(() => LoginResponse)
  @UseGuards(AuthGuard)
  async getLoggedInRestaurant(
    @Context() context: { req: Response },
  ): Promise<LoginResponse> {
    return await this.restaurantService.getLoggedInRestaurant(context.req);
  }

  @Query(() => LogoutResponse)
  @UseGuards(AuthGuard)
  async logOutRestaurant(@Context() context: { req: Request }) {
    return await this.restaurantService.LogoutRestaurant(context.req);
  }
}
