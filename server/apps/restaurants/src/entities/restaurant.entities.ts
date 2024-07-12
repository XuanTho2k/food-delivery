import { Directive, Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Directive('@key(fields:"id")')
export class RestaurantAvatars {
  @Field()
  id: string;

  @Field()
  public_id: string;

  @Field()
  url: string;

  @Field()
  sellerId: string;
}

@ObjectType()
export class Restaurant {
  @Field()
  id?: string;

  @Field()
  name: string;

  @Field()
  country: string;

  @Field()
  city: string;

  @Field()
  address: string;

  @Field()
  email: string;

  @Field(() => RestaurantAvatars, { nullable: true })
  avatars?: RestaurantAvatars | null;

  @Field()
  phone_number: number;

  @Field()
  password: string;

  @Field()
  createdAt?: Date;

  @Field()
  updatedAt?: Date;
}
