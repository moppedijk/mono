import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {
  API_URL_TOKEN,
  APP_LOGO_URL_TOKEN,
  APP_ORGANIZATION_NAME_TOKEN,
  APP_PROFILE_IMAGE_TOKEN,
  APP_PROJECT_LINK_TOKEN,
  APP_PROJECT_NAME_TOKEN,
  provideTokenValue,
} from '@mo/client/util-core';
import { environment } from '../environments/environment';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideClientHydration(),
    provideRouter(appRoutes),
    provideTokenValue(API_URL_TOKEN, environment.apiUrl),
    provideTokenValue(APP_LOGO_URL_TOKEN, 'assets/logos/logo.svg'),
    provideTokenValue(APP_PROFILE_IMAGE_TOKEN, 'assets/profile/1000x1000.webp'),
    provideTokenValue(APP_ORGANIZATION_NAME_TOKEN, 'Moppedijk'),
    provideTokenValue(APP_PROJECT_NAME_TOKEN, 'Mono'),
    provideTokenValue(APP_PROJECT_LINK_TOKEN, 'https://github.com/moppedijk/mono'),
  ],
};
