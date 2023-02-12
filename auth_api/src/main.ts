import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.enableCors({
    origin: '*',
    methods: 'GET, PUT, POST, DELETE',
    allowedHeaders:
      'Authorization, Access-Control-Allow-Headers, Origin,Accept, Access-Control-Allow-Origin, Access-Control-Allow-Credentials, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers',
  });
  await app.listen(3000);
}
bootstrap();
