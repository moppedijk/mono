import { Component, inject } from '@angular/core';

import {
  ButtonComponent,
  ErrorComponent,
  InputComponent,
  TextareaComponent,
} from '@mo/client/ui-common';
import { HttpService } from '@mo/client/util-core';

@Component({
  selector: 'mo-contact',
  standalone: true,
  imports: [InputComponent, TextareaComponent, ErrorComponent, ButtonComponent],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  public httpService = inject(HttpService);
  public form = {
    name: '',
    email: '',
    message: '',
  };
  public isLoading = false;
  public isDisabled = false;
  public hasError = false;
  public hasSucces = false;

  private startRequest(): void {
    this.isDisabled = true;
    this.isLoading = true;
    this.hasSucces = false;
    this.hasError = false;
  }

  private completeRequest(): void {
    this.isDisabled = false;
    this.isLoading = false;
    this.hasSucces = true;
    this.hasError = false;
    this.form = {
      email: '',
      message: '',
      name: '',
    };
  }

  private completeRequestWithError(): void {
    this.isDisabled = false;
    this.isLoading = false;
    this.hasSucces = false;
    this.hasError = true;
  }

  // Add better validation
  private isInValid(): boolean {
    return Boolean(!this.form.email || !this.form.name || !this.form.message);
  }

  public submit(): void {
    if (this.isInValid()) {
      return;
    }

    this.startRequest();

    this.httpService.post$(this.form, 'api/contact').subscribe({
      next: () => this.completeRequest(),
      error: () => this.completeRequestWithError(),
      complete: () => this.completeRequest(),
    });
  }
}
