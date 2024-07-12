import { Restaurant } from './entities/restaurant.entities';
import { JwtService } from '@nestjs/jwt';
import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { EmailService } from './email/email.service';
import { ActivationDto, LoginDto, RegisterDto } from './dto/restaurant.dto';
import { Response } from 'express';
import * as bcrypt from 'bcrypt';
import { TokenSender } from './utils/send.token';
import { PrismaService } from '../prisma/prisma.service';
@Injectable()
export class RestaurantsService {
  constructor(
    private readonly jwt: JwtService,
    private readonly prisma: PrismaService,
    private readonly config: ConfigService,
    private readonly email: EmailService,
  ) {}

  // register restaurant
  async registerRestaurant(registerDto: RegisterDto, response: Response) {
    const { name, country, city, address, email, phone_number, password } =
      registerDto;
    const isEmailExist = await this.prisma.restaurant.findUnique({
      where: {
        email,
      },
    });
    if (isEmailExist) {
      throw new BadRequestException('Request already exist with this email!');
    }

    const usersWithPhoneNumber = await this.prisma.restaurant.findUnique({
      where: {
        phone_number,
      },
    });

    if (usersWithPhoneNumber) {
      throw new BadRequestException(
        'Restaurant already exist with this phone number!',
      );
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const restaurant: Restaurant = {
      name,
      country,
      city,
      address,
      email,
      phone_number,
      password: hashedPassword,
    };

    const activationToken = await this.createActivationToken(restaurant);

    const client_side_uri = this.config.get<string>('CLIENT_SIDE_URI');

    const activation_token = `${client_side_uri}/activate-account/${activationToken}`;

    await this.email.sendMail({
      email,
      subject: 'Activate your restaurant account!',
      template: './activation-mail',
      name,
      activation_token,
    });
    return {
      message: 'Please check your email to activate your account',
      response,
    };
  }

  // create activation token
  async createActivationToken(restaurant: Restaurant) {
    const activationToken = this.jwt.sign(
      {
        restaurant,
      },
      {
        secret: this.config.get<string>('ACTIVATION_SECRET'),
        expiresIn: this.config.get<string>('ACTIVATION_EXPIRES'),
      },
    );
    return activationToken;
  }

  // activation restaurant
  async activationRestaurant(activationDto: ActivationDto, response: Response) {
    const { activation_token } = activationDto;

    const newRestaurant: {
      exp: number;
      restaurant: Restaurant;
      activationToken: string;
    } = this.jwt.verify(activation_token, {
      secret: this.config.get<string>('JWT_SECRET_KEY'),
    });

    if (newRestaurant?.exp * 1000 < Date.now()) {
      throw new BadRequestException('Invalid activation code');
    }

    const { name, country, city, phone_number, password, email, address } =
      newRestaurant.restaurant;

    const existRestaurant = await this.prisma.restaurant.findUnique({
      where: {
        email,
      },
    });
    if (existRestaurant) {
      throw new BadRequestException(
        'Restaurant already exist with this email!',
      );
    }

    const restaurant = await this.prisma.restaurant.create({
      data: {
        name,
        email,
        address,
        country,
        city,
        phone_number,
        password,
      },
    });

    return { restaurant, response };
  }

  //  Login restaurant
  async LoginRestaurant(loginDto: LoginDto) {
    const { email, password } = loginDto;

    const restaurant = await this.prisma.restaurant.findUnique({
      where: {
        email,
      },
    });

    if (
      restaurant &&
      (await this.comparePassword(password, restaurant.password))
    ) {
      const tokenSender = new TokenSender(this.config, this.jwt);
      return tokenSender.sendToken(restaurant);
    } else {
      return {
        user: null,
        accessToken: null,
        refreshToken: null,
        error: {
          message: 'Invalid email or password',
        },
      };
    }
  }

  // compare with hashed password
  async comparePassword(
    password: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return await bcrypt.compare(password, hashedPassword);
  }

  // get logged in restaurant
  async getLoggedInRestaurant(req: any) {
    const restaurant = req.restaurant;
    const refreshToken = req.refreshtoken;
    const accessToken = req.accesstoken;
    return { restaurant, refreshToken, accessToken };
  }

  // log out restaurant
  async LogoutRestaurant(req: any) {
    req.restaurant = null;
    req.accesstoken = null;
    req.refreshtoken = null;
    return { message: 'Logged out successfully!' };
  }
}
