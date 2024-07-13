import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class CartItemDto {
  @Field()
  @IsNotEmpty()
  id: string;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  price: number;

  @Field()
  category: string;

  @Field()
  thumbnail: string;

  @Field()
  restaurant_id: string;
}
