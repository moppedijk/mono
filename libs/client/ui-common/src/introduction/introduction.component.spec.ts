import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntrodctionComponent } from './introduction.component';

describe('IntrodctionComponent', () => {
  let component: IntrodctionComponent;
  let fixture: ComponentFixture<IntrodctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntrodctionComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntrodctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
