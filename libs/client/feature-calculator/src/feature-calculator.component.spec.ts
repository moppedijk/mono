import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureCalculatorComponent } from './feature-calculator.component';

describe('FeatureCalculatorComponent', () => {
  let component: FeatureCalculatorComponent;
  let fixture: ComponentFixture<FeatureCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureCalculatorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
