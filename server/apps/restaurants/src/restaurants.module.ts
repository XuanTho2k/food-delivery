import { Module } from '@nestjs/common';
import { RestaurantsController } from './restaurants.controller';
import { RestaurantsService } from './restaurants.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { EmailModule } from './email/email.module';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { RestaurantResolver } from './restaurants.resolver';
import { FoodsService } from './foods/foods.service';
import { CloudinaryService } from './cloudinary/cloudinary.service';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { FoodsResolver } from './foods/foods.resolver';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './apps/restaurants/.env',
    }),
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: {
        federation: 2,
      },
    }),
    EmailModule,
    CloudinaryModule,
  ],
  controllers: [RestaurantsController],
  providers: [
    RestaurantsService,
    ConfigService,
    JwtService,
    PrismaService,
    RestaurantResolver,
    FoodsService,
    CloudinaryService,
    FoodsResolver,
  ],
})
export class RestaurantsModule {}
