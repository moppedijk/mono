import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonAnkerComponent } from './button-anker.component';

describe('ButtonAnkerComponent', () => {
  let component: ButtonAnkerComponent;
  let fixture: ComponentFixture<ButtonAnkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonAnkerComponent],
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
