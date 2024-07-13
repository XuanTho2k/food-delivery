import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Cart {
  @Field()
  id: string;

  @Field()
  userId: string;

  @Field(() => [CartItem], { nullable: true })
  items?: CartItem[];

  @Field()
  totalItem: number;

  @Field()
  totalPrice: number;
}

@ObjectType()
export class CartItem {
  @Field(() => ID)
  id: string;

  @Field()
  cartId: string;

  @Field()
  foodId: string;

  @Field(() => Int)
  quanity: number;

  @Field(() => Food)
  food: Food;
}

@ObjectType()
export class Food {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  price: number;

  @Field()
  description: string;

  @Field()
  category: string;

  @Field(() => [Images])
  images: Images[];

  @Field()
  restaurantId: string;

  @Field()
  createAt: Date;

  @Field()
  updateAt: Date;
}

@ObjectType()
export class Images {
  @Field()
  public_id: string;

  @Field()
  url: string;
}
