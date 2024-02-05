/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  const port = process.env.PORT || 3000;
  // TODO: Put host in environment
  const host = process.env.PORT ? 'https://moppedijk-api.onrender.com' : 'http://localhost';

  app.setGlobalPrefix(globalPrefix);
  app.enableCors({
    origin: [
      'http://localhost:4200',
      'https://moppedijk.nl',
    ]
  });

  await app.listen(port);
  
  Logger.log(
  `🚀 Application is running on: ${host}:${port}/${globalPrefix}`,
  );
}

bootstrap();
