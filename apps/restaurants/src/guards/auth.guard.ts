import { PrismaService } from '@/restaurants/prisma/prisma.service';
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly jwt: JwtService,
    private readonly prisma: PrismaService,
    private readonly config: ConfigService,
  ) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const gqlContext = GqlExecutionContext.create(context);
    const { req } = gqlContext.getContext();

    const accessToken = req.headers.accesstoken as string;
    const refreshToken = req.headers.refreshtoken as string;

    if (!accessToken || !refreshToken) {
      throw new UnauthorizedException('Please login to access this resource!');
    }
    if (accessToken) {
      const decoded = this.jwt.verify(accessToken, {
        secret: this.config.get<string>('ACCESS_TOKEN_SECRET'),
      });

      if (decoded?.exp * 1000 < Date.now()) {
        await this.updateAccessToken(req);
      }
    }
    return true;
  }

  private async updateAccessToken(req: any): Promise<void> {
    try {
      const refreshTokenData = req.headers.refreshtoken as string;

      const decoded = this.jwt.decode(refreshTokenData);

      if (decoded?.exp * 1000 < Date.now()) {
        throw new UnauthorizedException(
          'Please login to access this resource!',
        );
      }

      const restaurant = await this.prisma.restaurant.findUnique({
        where: {
          id: decoded.id,
        },
      });
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
        { id: restaurant.id },
        {
          secret: this.config.get<string>('REFRESH_TOKEN_SECRET'),
          expiresIn: 'REFRESH_TOKEN_EXPIRES',
        },
      );
      req.accesstoken = accessToken;
      req.refreshtoken = refreshToken;
      req.restaurant = restaurant;
    } catch (error) {
      throw new UnauthorizedException(error.message);
    }
  }
}
