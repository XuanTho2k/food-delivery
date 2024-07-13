import { Test, TestingModule } from '@nestjs/testing';
import { CartsController } from './carts.controller';
import { CartsService } from './carts.service';

describe('CartsController', () => {
  let cartsController: CartsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CartsController],
      providers: [CartsService],
    }).compile();

    cartsController = app.get<CartsController>(CartsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(cartsController.getHello()).toBe('Hello World!');
    });
  });
});
