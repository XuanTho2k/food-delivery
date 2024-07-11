import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Restaurant } from '@prisma/client';

export class TokenSender {
  constructor(
    private readonly config: ConfigService,
    private readonly jwt: JwtService,
  ) {}

  public sendToken(restaurant: Restaurant) {
    const accessToken = this.jwt.sign(
      {
        id: restaurant.id,
      },
      {
        secret: this.config.get<string>('ACCESS_TOKEN_SECRET'),
        expiresIn: this.config.get<string>('ACCESS_TOKEN_EXPIRES'),
      },
    );
    const refreshToken = this.jwt.sign(
      {
        id: restaurant.id,
      },
      {
        secret: this.config.get<string>('REFRESH_TOKEN_SECRET'),
        expiresIn: this.config.get<string>('REFRESH_TOKEN_EXPIRES'),
      },
    );
    return { restaurant, accessToken, refreshToken };
  }
}
