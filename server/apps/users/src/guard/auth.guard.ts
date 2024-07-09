import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GqlExecutionContext } from '@nestjs/graphql';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../../../../prisma/Prisma.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly config: ConfigService,
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const gqlContext = GqlExecutionContext.create(context);
    const { req } = gqlContext.getContext();

    const accessToken = req.headers.accesstoken as string;
    const refreshToken = req.headers.refreshtoken as string;
    console.log(accessToken, refreshToken);

    if (!accessToken || !refreshToken) {
      throw new UnauthorizedException('Please login to access this resource!');
    }
    if (accessToken) {
      // const decoded = this.jwt.verify(accessToken, {
      //   secret: this.config.get<string>('ACCESS_TOKEN_SECRET'),
      // });
      const decoded = this.jwt.decode(accessToken);
      const expirationTime = decoded?.exp * 1000;
      if (expirationTime < Date.now()) {
        await this.updateAccessToken(req);
      }
    }

    return true;
  }

  private async updateAccessToken(req: any): Promise<void> {
    try {
      const refreshTokenData = req.headers.refreshtoken as string;

      // const decoded = this.jwt.verify(refreshTokenData, {
      //   secret: this.config.get<string>('REFRESH_TOKEN_SECRET'),
      // });
      const decoded = this.jwt.decode(refreshTokenData);

      const expirationTime = decoded.exp * 1000;

      if (expirationTime < Date.now()) {
        throw new UnauthorizedException('Please login to access this resource');
      }

      const user = await this.prisma.user.findUnique({
        where: {
          id: decoded.id,
        },
      });
      const accessToken = this.jwt.sign(
        {
          id: user.id,
        },
        {
          secret: this.config.get<string>('ACCESS_TOKEN_SECRET'),
          expiresIn: '5m',
        },
      );
      const refreshToken = this.jwt.sign(
        { id: user.id },
        {
          secret: this.config.get<string>('REFRESH_TOKEN_SECRET'),
          expiresIn: '7d',
        },
      );

      req.accessToken = accessToken;
      req.refreshToken = refreshToken;
      req.user = user;
    } catch (error) {
      throw new UnauthorizedException(error.message);
    }
  }
}
