// import { ContactController, ContactModule } from '@mo/backend/data-access-contact';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmailModule } from './email/email.module';
import { ValidatorService } from './validator/validator.service';

@Module({
  imports: [
    EmailModule,
    ConfigModule.forRoot({
      isGlobal: true, // no need to import into other modules
    }),
  ],
  controllers: [AppController],
  providers: [AppService, ValidatorService],
})
export class AppModule {}
