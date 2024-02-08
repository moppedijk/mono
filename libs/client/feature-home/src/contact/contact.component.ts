import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent, ErrorComponent, InputComponent, TextareaComponent } from '@mo/client/ui-common';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { API_URL_TOKEN } from '@mo/client/util-core';

@Component({
  selector: 'mo-contact',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    InputComponent,
    TextareaComponent,
    ErrorComponent,
    ButtonComponent,
  ],
  templateUrl: './contact.component.html',
  providers: [HttpClient]
})
export class ContactComponent {
  public apiUrl = inject(API_URL_TOKEN);
  public httpClient = inject(HttpClient);
  public form = {
    name: '',
    email: '',
    message: '',
  }
  public isLoading = false;
  public isDisabled = false;
  public hasError = false;

  private startRequest(): void {
    this.isDisabled = true;
    this.isLoading = true;
    this.hasError = false;
  }
  
  private completeRequest(): void {
    this.isDisabled = false;
    this.isLoading = false;
    this.hasError = false;
    this.form = {
      email: '',
      message: '',
      name: '',
    }
  }

  private completeRequestWithError(): void {
    this.isDisabled = false;
    this.isLoading = false;
    this.hasError = true;
  }

  // Add better validation
  private isInValid(): boolean {
    return Boolean(
      !this.form.email ||
      !this.form.name ||
      !this.form.message
    );
  }

  public submit(): void {
    const url = `${this.apiUrl}/api/contact`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
    const body = this.form;

    if (this.isInValid()) {
      return;
    }

    this.startRequest();
    this.httpClient.post(url, body, httpOptions).subscribe({
      next: () => this.completeRequest(),
      error: () => this.completeRequestWithError(),
      complete: () => this.completeRequest(),
    });
  }
}
