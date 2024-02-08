import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        loadComponent: () => import('@mo/client/feature-home').then((component) => component.FeatureHomeComponent)
    }
];
