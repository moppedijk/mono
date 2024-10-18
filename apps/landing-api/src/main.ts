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
  const host = process.env.API_HOST;
  const origin = process.env.API_ORIGIN;
  const isLocal = process.env.NODE_ENV === 'local';
  const url = isLocal ? `${host}:${port}` : `https://${host}`;

  app.setGlobalPrefix(globalPrefix);
  // Strict origin checking - remove trailing slash on origin
  app.enableCors({ origin });

  await app.listen(port);

  Logger.log(`🚀 Application is running on: ${url}`);
}

bootstrap();
