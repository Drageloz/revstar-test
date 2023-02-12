import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.enableCors({
    origin: '*',
    methods: 'GET, PUT, POST, DELETE',
    allowedHeaders:
      'Authorization, Access-Control-Allow-Headers, Origin,Accept, Access-Control-Allow-Origin, Access-Control-Allow-Credentials, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers',
  });

  const config = new DocumentBuilder()
    .setTitle('Auth API')
    .setDescription('API to authenticate and get JWT')
    .setVersion('1.0')
    .addTag('Auth')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(3000);
}
bootstrap();
