import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiCommonModule } from '@mo/ui-common';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'mo-feature-contact',
  standalone: true,
  imports: [CommonModule, UiCommonModule, HttpClientModule],
  templateUrl: './feature-contact.component.html',
  styleUrl: './feature-contact.component.scss',
  providers: [HttpClient]
})
export class FeatureContactComponent {
  public httpClient = inject(HttpClient);
  public form = {
    email: 'martijn@oppedijk.online',
    message: 'Hi!',
  }

  public submit(): void {
    const apiUrl = 'http://localhost:3000';
    const url = `${apiUrl}/api/contact`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
    const body = this.form;

    this.httpClient.post(url, body, httpOptions).subscribe(console.log);
  }
}
