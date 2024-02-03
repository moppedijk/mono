import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

export interface UserInterface {
    email: '',
    name: '',
}

@Injectable()
export class EmailService {
    constructor(private mailerService: MailerService) {}

    async emailContact(user: UserInterface) {
        await this.mailerService.sendMail({
          to: user.email,
          // from: '"Support Team" <support@example.com>', // override default from
          subject: 'Welcome to Nice App! Confirm your Email',
          template: './receiver', // `.hbs` extension is appended automatically
          context: { // ✏️ filling curly brackets with content
            name: user.name,
            message: 'YOLO',
            email: user.email,
          },
        });
    }
}
