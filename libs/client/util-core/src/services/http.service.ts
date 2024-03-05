import { inject, Injectable } from '@angular/core';
import { API_URL_TOKEN } from '../tokens/api-url.token';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { LoaderService } from './loader.service';
import { ToasterMessageEnum, ToasterService } from './toaster.service';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private apiUrl = inject(API_URL_TOKEN);
  private httpClient = inject(HttpClient);
  private loaderService = inject(LoaderService);
  private toasterService = inject(ToasterService);

  public post$<T>(body: T, endPoint: string): Observable<void> {
    const subject$ = new Subject<void>();
    const url = `${this.apiUrl}/${endPoint}`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    this.loaderService.start();
    this.httpClient.post(url, body, httpOptions).subscribe({
      next: () => {
        this.loaderService.complete();
        this.toasterService.setMessage(ToasterMessageEnum.Success);
        subject$.next();
        subject$.complete();
      },
      error: (error) => {
        this.loaderService.complete();
        this.toasterService.setMessage(ToasterMessageEnum.Error);
        subject$.error(error);
      },
      complete: () => {
        this.loaderService.complete();
        subject$.complete();
      },
    });

    return subject$.asObservable();
  }
}
