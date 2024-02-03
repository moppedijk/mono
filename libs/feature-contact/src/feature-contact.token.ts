import { InjectionToken } from "@angular/core";

export interface FeatureContactTokenInterface {
    apiUrl: string;
    apiPrefix: string;
}

export const FEATURE_CONTACT_TOKEN = new InjectionToken<FeatureContactTokenInterface>('');
