import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureContactComponent } from './feature-contact.component';
import { provideTokenValue } from '@mo/client/util-core';
import { FEATURE_CONTACT_TOKEN } from './feature-contact.token';

describe('FeatureContactComponent', () => {
  let component: FeatureContactComponent;
  let fixture: ComponentFixture<FeatureContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureContactComponent],
      providers: [
        provideTokenValue(FEATURE_CONTACT_TOKEN, {
          apiUrl: 'http://api.url',
          apiPrefix: 'api',
        }),
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
