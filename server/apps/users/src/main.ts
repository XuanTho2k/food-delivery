import { NestFactory } from '@nestjs/core';
import { UsersModule } from './users.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(UsersModule);
  const logger = new Logger();
  app.useGlobalPipes(new ValidationPipe());

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'servers/email-templates'));

  app.setViewEngine('ejs');

  app.enableCors({
    origin: '*',
  });

  const configService = app.get<ConfigService>(ConfigService);
  await app.listen(configService.get<string>('PORT'), async () => {
    const url = await app.getUrl();
    logger.log('Auth Server is running on ' + url);
  });
}
bootstrap();
