import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as AWS from 'aws-sdk';
import { AppDataSource } from '../../../data-source';
import { UtilsInterface } from '../ports/utils.interface';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class UtilsService implements UtilsInterface {
  constructor(
    private jwtService: JwtService,
    private readonly mailerService: MailerService,
  ) {}

  async checkConnection() {
    if (!AppDataSource.isInitialized) {
      await AppDataSource.initialize();
    }
  }

  async sendMail(file: Express.Multer.File) {
    AWS.config.update({ region: 'us-west-2' });

    const args = {
      fromName: 'Drageloz',
      fromEmail: 'siriland.dev@gmail.com',
      toEmail: 'siriland.dev@gmail.com',
      subject: 'test',
      text: 'This is your inventary',
      fileName: file.fieldname + '.pdf',
    };

    await this.mailerService.sendMail({
      from: `${args.fromName} <${args.fromEmail}>`,
      to: args.toEmail,
      subject: args.subject,
      text: args.text,
      html: `<div>${args.text}</div>`,
      attachments: [
        {
          filename: args.fileName,
          content: file.buffer,
          contentType: 'application/pdf',
        },
      ],
    });
  }
}
