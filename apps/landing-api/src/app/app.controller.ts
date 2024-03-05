import { Controller, Logger, Post, Req, Res } from '@nestjs/common';
import { EmailService } from './email/email.service';
import { Response } from 'express';
import { ValidatorService } from './validator/validator.service';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly emailService: EmailService,
    private readonly validatorService: ValidatorService,
    private readonly appService: AppService,
  ) {}

  private onSuccess(response: Response): void {
    response.status(200).send({ message: 'Success!' });
  }

  private onBadRequest(response: Response): void {
    Logger.log('Bad Request');
    response.status(400).send({ message: 'Bad Request... Please try again.' });
  }

  private onError(error, response: Response): void {
    Logger.log(error);
    response.status(500).send({ message: 'Something went wrong...' });
  }

  @Post('/contact')
  async postContact(@Req() request: Request, @Res() response: Response) {
    const isEmailValid = this.validatorService.validateEmail(
      request.body['email'],
    );
    const isNameValid = this.validatorService.validateName(
      request.body['name'],
    );
    const isMessageValid = this.validatorService.validateMessage(
      request.body['message'],
    );

    if (!isEmailValid) {
      this.onBadRequest(response);
      return;
    }

    if (!isNameValid) {
      this.onBadRequest(response);
      return;
    }

    if (!isMessageValid) {
      this.onBadRequest(response);
      return;
    }

    await this.emailService
      .emailContact({
        email: request.body['email'],
        name: request.body['name'],
        message: request.body['message'],
      })
      .then(() => this.onSuccess(response))
      .catch((error) => this.onError(error, response));
  }

  // For testing
  public getData() {
    return this.appService.getData();
  }
}
