import { Field, ObjectType } from '@nestjs/graphql';
import { Restaurant } from '../entities/restaurant.entities';

@ObjectType()
export class RestaurantErrorType {
  @Field()
  message: string;

  @Field({ nullable: true })
  code?: string;
}

@ObjectType()
export class RestaurantRegisterResponse {
  @Field()
  message: string;

  @Field(() => RestaurantErrorType, { nullable: true })
  error?: RestaurantErrorType;
}

@ObjectType()
export class RestaurantActivationResponse {
  @Field(() => Restaurant)
  restaurant: Restaurant | unknown;

  @Field(() => RestaurantErrorType, { nullable: true })
  error?: RestaurantErrorType;
}

@ObjectType()
export class RestaurantLoginResponse {
  @Field(() => Restaurant, { nullable: true })
  restaurant?: Restaurant | any;

  @Field({ nullable: true })
  accessToken?: string;

  @Field({ nullable: true })
  refreshToken?: string;

  @Field(() => RestaurantErrorType, { nullable: true })
  error?: RestaurantErrorType;
}

@ObjectType()
export class RestaurantLogoutResponse {
  @Field()
  message?: string;
}
