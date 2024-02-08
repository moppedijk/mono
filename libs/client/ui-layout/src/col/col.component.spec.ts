import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColComponent } from './col.component';
import { UiLayoutModule } from '../ui-layout.module';

describe('ColComponent', () => {
  let component: ColComponent;
  let fixture: ComponentFixture<ColComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiLayoutModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
