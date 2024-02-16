import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

export interface EmailContactRequest {
    email: string,
    name: string,
    message: string;
}

@Injectable()
export class EmailService {
    constructor(
      private mailerService: MailerService,
      private configService: ConfigService,
    ) {}

    private async sendToApplicant(request: EmailContactRequest) {
      await this.mailerService.sendMail({
        to: request.email,
        subject: 'Hi! From Martijn',
        template: './applicant',
        context: {
          name: request.name,
          message: request.message,
          email: request.email,
        },
      });
    }
    
    private async sendToOwner(request: EmailContactRequest) {
      await this.mailerService.sendMail({
        to: this.configService.get('MAIL_USER'),
        subject: 'New message from www.moppedijk.nl',
        template: './owner',
        context: {
          name: request.name,
          message: request.message,
          email: request.email,
        },
      });
    }

    public async emailContact(request: EmailContactRequest) {
        await this.sendToApplicant(request);
        await this.sendToOwner(request);
    }
    
    public async fakeAsync(request: EmailContactRequest) {
        await setTimeout(() => request, 3000);
    }
}
