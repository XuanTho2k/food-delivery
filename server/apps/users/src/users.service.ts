import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService, JwtVerifyOptions } from '@nestjs/jwt';
import {
  ActivationDto,
  ForgotPasswordDto,
  LoginDto,
  RegisterDto,
  ResetPasswordDto,
} from './dto/user.dto';
import { Response } from 'express';
import { PrismaService } from '../../../prisma/Prisma.service';
import * as bcrypt from 'bcrypt';
import { EmailService } from './email/email.service';
import { TokenSender } from './utils/sendTokens';
import { User } from '@prisma/client';

interface UserData {
  name: string;
  email: string;
  password: string;
  phone_number: number;
}

@Injectable()
export class UsersService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
    private readonly prismaService: PrismaService,
    private readonly emailService: EmailService,
  ) {}

  // register user service
  async register(registerDto: RegisterDto, response: Response) {
    const { name, email, password, phone_number } = registerDto;

    const isEmailExist = await this.prismaService.user.findUnique({
      where: {
        email,
      },
    });
    if (isEmailExist) {
      throw new BadRequestException('User already exist with this email!');
    }

    const usersWithPhoneNumber = await this.prismaService.user.findUnique({
      where: {
        phone_number,
      },
    });
    if (usersWithPhoneNumber) {
      throw new BadRequestException(
        'User already exist with this phone number!',
      );
    }
    const saltRounds = parseInt(this.configService.get('SALT_ROUND'));
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const user = {
      name,
      email,
      password: hashedPassword,
      phone_number,
    };

    const activationToken = await this.createActivationToken(user);
    const activationCode = activationToken.activationCode;

    this.emailService.sendMail({
      email,
      subject: 'Activate your account!',
      template: './activation-mail',
      name,
      activationCode,
    });
    const activation_token = activationToken.token;
    return { activation_token, response };
  }

  // create activation token
  async createActivationToken(user) {
    const activationCode = Math.floor(1000 + Math.random() * 9000).toString();

    const token = this.jwtService.sign(
      {
        user,
        activationCode,
      },
      {
        secret: this.configService.get<string>('ACTIVATION_SECRET'),
        expiresIn: '5m',
      },
    );
    return { token, activationCode };
  }

  // activation user
  async activateUser(activationDto: ActivationDto, response: Response) {
    const { activationToken, activationCode } = activationDto;

    const newUser: { user: UserData; activationCode: string } =
      this.jwtService.verify(activationToken, {
        secret: this.configService.get<string>('ACTIVATION_SECRET'),
      } as JwtVerifyOptions);

    if (newUser.activationCode !== activationCode) {
      throw new BadRequestException('Invalid activation code');
    }

    const { name, email, password, phone_number } = newUser.user;

    const existUser = await this.prismaService.user.findUnique({
      where: {
        email,
      },
    });
    if (existUser) {
      throw new BadRequestException('User already exist with this email!');
    }
    const user = await this.prismaService.user.create({
      data: {
        name,
        email,
        password,
        phone_number,
      },
    });

    return { user, response };
  }
  // login user service
  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;
    const user = await this.prismaService.user.findUnique({
      where: {
        email,
      },
    });
    if (user && (await this.comparePassword(password, user.password))) {
      const tokenSender = new TokenSender(this.configService, this.jwtService);
      return tokenSender.sendToken(user);
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

  // get all users service
  async getUsers() {
    return this.prismaService.user.findMany({});
  }

  // get logged in user
  async getLoggedInUser(req: any) {
    const user = req.user;
    const refreshToken = req.refreshToken;
    const accessToken = req.accessToken;
    return { user, refreshToken, accessToken };
  }

  // compare password
  async comparePassword(
    password: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return await bcrypt.compare(password, hashedPassword);
  }

  // log out
  async logout(req: any) {
    req.user = null;
    req.refreshToken = null;
    req.accessToken = null;
    return { message: 'Logged out successfully!' };
  }

  // forgot password
  async forgotPassword(forgotPwDto: ForgotPasswordDto) {
    const { email } = forgotPwDto;
    const user = await this.prismaService.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      throw new BadRequestException('User not found with this email!');
    }

    const forgotPasswordToken = await this.generateForgotPasswordToken(user);

    const resetPasswordUrl =
      this.configService.get<string>('CLIENT_SIDE_URI') +
      `/reset-password?verify=${forgotPasswordToken}`;

    await this.emailService.sendMail({
      email,
      subject: 'Reset your Password!',
      template: './forgot-password',
      name: user.name,
      activationCode: resetPasswordUrl,
    });
    return { message: `Your forgot password request successful!` };
  }

  // generate forgotPw token
  async generateForgotPasswordToken(user: User) {
    const forgotPasswordToken = this.jwtService.sign(
      {
        user,
      },
      {
        secret: this.configService.get<string>('FORGOT_PASSWORD_SECRET'),
        expiresIn: '5m',
      },
    );
    return forgotPasswordToken;
  }

  // reset password
  async resetPassword(resetPwDto: ResetPasswordDto) {
    const { password, activationToken } = resetPwDto;
    const decoded = this.jwtService.decode(activationToken);
    if (!decoded || decoded?.exp * 1000 < Date.now()) {
      throw new BadRequestException('Invalid token!');
    }
    const saltRounds = parseInt(this.configService.get('SALT_ROUND'));
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const user = await this.prismaService.user.update({
      where: {
        id: decoded.user.id,
      },
      data: {
        password: hashedPassword,
      },
    });
    return { user };
  }
}
