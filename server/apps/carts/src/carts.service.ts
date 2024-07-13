import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CartItemDto } from './dto/cart.dto';

@Injectable()
export class CartsService {
  constructor(private readonly prisma: PrismaService) {}
  getHello(): string {
    return 'Hello World!';
  }

  async createCartItem(cartItemDto: CartItemDto, req: any) {
    const user_id = req.user.id;
    const existingCart = await this.prisma.cart.findUnique({
      where: {
        userId: user_id,
      },
    });

    let existingItems: CartItemDto[];

    if (existingCart) {
      existingItems = existingCart.items;
    }
  }
}
