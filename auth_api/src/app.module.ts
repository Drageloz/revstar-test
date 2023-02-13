import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './adapters/rest/auth.controller';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthService } from './domain/service/auth_service_implement.service';
import { JwtStrategy } from './domain/strategy/jwt.strategy';
import { LocalStrategy } from './domain/strategy/local.strategy';

@Module({
  imports: [
    PassportModule,
    ConfigModule.forRoot({
      envFilePath: ['.env.local'],
    }),
    JwtModule.register({
      secret: process.env.SECRET_KEY,
      signOptions: { expiresIn: '3600s' },
    }),
  ],
  controllers: [AppController, AuthController],
  providers: [AppService, AuthService, LocalStrategy, JwtStrategy],
})
export class AppModule {}
