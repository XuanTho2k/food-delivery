import { PrismaService } from '@/restaurants/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { EmailService } from '../email/email.service';
import { CreateFoodDto } from './dto/foods.dto';
import { Images } from '@prisma/client';
import { CloudinaryService } from '../cloudinary/cloudinary.service';

@Injectable()
export class FoodsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly config: ConfigService,
    private readonly email: EmailService,
    private readonly cloudinary: CloudinaryService,
  ) {}

  // create food
  async createFood(createFoodDto: CreateFoodDto, req: any, response: Response) {
    try {
      const { name, description, price, estimatedPrice, category, images } =
        createFoodDto;

      const restaurantId = req.restaurant?.id;

      const foodImages: Images | any = [];

      for (const image of images) {
        if (typeof image === 'string') {
          const data = await this.cloudinary.upload(image);
          foodImages.push({
            public_id: data.public_id,
            url: data.secure_url,
          });
        }
      }
      const foodData = {
        name,
        description,
        price,
        estimatedPrice,
        category,
        images: {
          create: foodImages.map(
            (image: { public_id: string; url: string }) => ({
              public_id: image.public_id,
              url: image.url,
            }),
          ),
        },
        restaurantId,
      };

      await this.prisma.foods.create({
        data: foodData,
      });
      return { message: 'Food Created Successfully!' };
    } catch (error) {
      return { message: error };
    }
  }

  //   get all restaurant foods
  async getLoggedInRestaurantFood(req: any, res: Response) {
    const restaurantId = req.restaurant?.id;
  }
}
