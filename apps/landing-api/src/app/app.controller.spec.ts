import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ValidatorService } from './validator/validator.service';
import { EmailModule } from './email/email.module';
import { ConfigModule } from '@nestjs/config';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [EmailModule, ConfigModule.forRoot({ isGlobal: true })],
      controllers: [AppController],
      providers: [AppService, ValidatorService],
    }).compile();
  });

  describe('getData', () => {
    it('should return "Hello API"', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.getData()).toEqual({ message: 'Hello API' });
    });
  });
});
