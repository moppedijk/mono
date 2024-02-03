import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { FEATURE_CONTACT_TOKEN } from '@mo/feature-contact';
import { provideTokenValue } from '@mo/util-core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(),
    provideRouter(appRoutes),
    provideTokenValue(FEATURE_CONTACT_TOKEN, {
      apiUrl: 'http://localhost:3000',
      apiPrefix: 'api',
    }),
  ],
};
