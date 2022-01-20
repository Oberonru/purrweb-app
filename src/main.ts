import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import config from './configuration/config';

async function bootstrap() {
  const configuration = config();
  const { host, port } = configuration.http;

  const app = await NestFactory.create(AppModule);
  await app.listen(port);
}

bootstrap();
