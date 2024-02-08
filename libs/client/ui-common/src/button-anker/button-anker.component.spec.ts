import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonAnkerComponent } from './button-anker.component';
import { UiCommonModule } from '../ui-common.module';

describe('ButtonAnkerComponent', () => {
  let component: ButtonAnkerComponent;
  let fixture: ComponentFixture<ButtonAnkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiCommonModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonAnkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
