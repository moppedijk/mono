import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }
  
  @Post('/contact')
  postCV(@Body() body) {
    console.log(body);
    return {
      message: 'Send a mail to get in contact'
    };
  }
}
