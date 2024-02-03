import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureContactComponent } from './feature-contact.component';

describe('FeatureContactComponent', () => {
  let component: FeatureContactComponent;
  let fixture: ComponentFixture<FeatureContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureContactComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
