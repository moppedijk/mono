import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { FEATURE_CONTACT_TOKEN } from '@mo/client/feature-contact';
import { provideTokenValue } from '@mo/client/util-core';
import { environment } from '../environment/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(),
    provideRouter(appRoutes),
    provideTokenValue(FEATURE_CONTACT_TOKEN, {
      apiUrl: environment.apiUrl,
      apiPrefix: 'api',
    }),
  ],
};
