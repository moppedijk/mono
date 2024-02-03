import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { EmailService } from './email/email.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly emailService: EmailService,
  ) {}

  @Get()
  getData() {
    return this.appService.getData();
  }
  
  @Post('/contact')
  postContact() {
    return this.emailService.emailContact();
  }
}
