import { Field, ObjectType } from '@nestjs/graphql';
import { ErrorType } from '../../types/restaurant.type';
import { Food } from '../entities/foods.entities';
import { Foods } from '@prisma/client';

@ObjectType()
export class CreateFoodResponse {
  @Field()
  message: string;

  @Field(() => ErrorType, { nullable: true })
  error?: ErrorType;
}

@ObjectType()
export class LoggedInRestaurantReponse {
  @Field(() => [Food], { nullable: true })
  foods: Foods;

  @Field(() => ErrorType, { nullable: true })
  error?: ErrorType;
}

@ObjectType()
export class DeleteFoodReponse {
  @Field()
  message: string;

  @Field(() => ErrorType, { nullable: true })
  error?: ErrorType;
}
