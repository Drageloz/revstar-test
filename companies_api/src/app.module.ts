import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { CompanyController } from './adapters/rest/company.controller';
import { InventaryController } from './adapters/rest/inventary.controller';
import { UtilsController } from './adapters/rest/utils.controller';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompanyService } from './domain/service/company.service';
import { InventaryService } from './domain/service/inventary.service';
import { UtilsService } from './domain/service/utils.service';
import { JwtStrategy } from './domain/strategy/jwt.strategy';
import { ConfigModule } from '@nestjs/config';
import { MailerModule } from '@nestjs-modules/mailer';
import * as AWS from 'aws-sdk';
import { join } from 'path';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';

const upperCaseFn = (name: string) => {
  return name.toUpperCase();
};

@Module({
  imports: [
    PassportModule,
    JwtModule,
    MailerModule.forRootAsync({
      useFactory: async () => ({
        transport: {
          SES: new AWS.SES({
            region: process.env.AWS_SES_REGION,
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
          }),
          secure: false,
          ignoreTLS: true,
          requireTLS: false,
          auth: {
            user: process.env.USER,
            pass: process.env.PASS,
          },
          debug: true,
        },
        defaults: {
          from: `"siriland.dev@gmail.com" <
            'siriland.dev@gmail.com',
          >`,
        },
        template: {
          dir: join(__dirname, '/templates'),
          adapter: new HandlebarsAdapter({ upperCase: upperCaseFn }), // or new PugAdapter() or new EjsAdapter()
          options: {
            strict: true,
          },
        },
        options: {
          partials: {
            dir: join(__dirname, '/templates/partials'),
            options: {
              strict: true,
            },
          },
        },
      }),
    }),
    ConfigModule.forRoot({
      envFilePath: ['.env.local'],
    }),
  ],
  controllers: [
    AppController,
    CompanyController,
    InventaryController,
    UtilsController,
  ],
  providers: [
    AppService,
    CompanyService,
    JwtStrategy,
    InventaryService,
    UtilsService,
  ],
})
export class AppModule {}
