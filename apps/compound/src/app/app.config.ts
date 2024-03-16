import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';
import {
  APP_LOGO_URL_TOKEN,
  APP_ORGANIZATION_NAME_TOKEN,
  APP_PROFILE_IMAGE_TOKEN,
  APP_PROJECT_LINK_TOKEN,
  APP_PROJECT_NAME_TOKEN,
  provideTokenValue,
} from '@mo/client/util-core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideClientHydration(),
    provideRouter(appRoutes),
    provideTokenValue(APP_LOGO_URL_TOKEN, ''),
    provideTokenValue(APP_PROFILE_IMAGE_TOKEN, ''),
    provideTokenValue(APP_ORGANIZATION_NAME_TOKEN, 'Compound'),
    provideTokenValue(APP_PROJECT_NAME_TOKEN, 'Compound'),
    provideTokenValue(APP_PROJECT_LINK_TOKEN, ''),
  ],
};
