import { Controller, Get } from '@nestjs/common';
import { CartsService } from './carts.service';

@Controller()
export class CartsController {
  constructor(private readonly cartsService: CartsService) {}

  @Get()
  getHello(): string {
    return this.cartsService.getHello();
  }
}
