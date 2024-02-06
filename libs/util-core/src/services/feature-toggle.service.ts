import { Injectable, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

export interface EnabledFeatureInterface {
    [id: string]: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class FeatureToggleService {
    private activatedRoute = inject(ActivatedRoute);

    public enabledFeature$ = new BehaviorSubject<EnabledFeatureInterface>({});

    public watch(enabledFeature: EnabledFeatureInterface): void {
        this.enabledFeature$.next(enabledFeature);
        this.activatedRoute.queryParams.subscribe({
            next: (queryParams) => {
                if (queryParams['feature']) {
                    this.enabledFeature$.next({
                        [queryParams['feature']]: true,
                    })
                } else {
                    this.enabledFeature$.next({});
                }
            }
        })
    }
}
