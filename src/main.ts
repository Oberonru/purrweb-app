import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import config from './configuration/config';

async function bootstrap() {
  const configuration = config();
  const { host, port } = configuration.http;

  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('Purrweb-app')
    .setDescription('Api documentation')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swaggerDocs', app, document);

  await app.listen(port, host);
}

bootstrap();
