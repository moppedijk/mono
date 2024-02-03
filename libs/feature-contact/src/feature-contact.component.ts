import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiCommonModule } from '@mo/ui-common';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { FEATURE_CONTACT_TOKEN } from './feature-contact.token';

@Component({
  selector: 'mo-feature-contact',
  standalone: true,
  imports: [CommonModule, UiCommonModule, HttpClientModule],
  templateUrl: './feature-contact.component.html',
  styleUrl: './feature-contact.component.scss',
  providers: [HttpClient]
})
export class FeatureContactComponent {
  public token = inject(FEATURE_CONTACT_TOKEN);
  public httpClient = inject(HttpClient);
  public form = {
    email: 'martijn@oppedijk.online',
    message: 'Hi!',
  }

  constructor() {
    console.log(this.token.apiUrl);
  }

  public submit(): void {
    const url = `${this.token.apiUrl}/api/contact`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
    const body = this.form;

    this.httpClient.post(url, body, httpOptions).subscribe(console.log);
  }
}
