import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { CartsService } from "./carts.service";
import { UseGuards } from "@nestjs/common";

@Resolver('Cart')

export class CartResolver {
    constructor(private readonly cart:CartsService) {
        
    }

    @Mutation()
    @UseGuards
    async addToCart(
        @Args
    )
}