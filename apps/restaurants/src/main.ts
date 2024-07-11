import { NestFactory } from '@nestjs/core';
import { RestaurantsModule } from './restaurants.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as express from 'express';
import { join } from 'path';

async function bootstrap() {
  const app =
    await NestFactory.create<NestExpressApplication>(RestaurantsModule);

  app.use(express.json({ limit: '50mb' }));
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(
    join(__dirname, '..', 'apps/restaurants/email-templates'),
  );
  app.setViewEngine('ejs');

  app.enableCors({
    origin: '*',
  });
  await app.listen(4000);
}
bootstrap();
