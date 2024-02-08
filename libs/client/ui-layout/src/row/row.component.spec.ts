import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowComponent } from './row.component';
import { UiLayoutModule } from '../ui-layout.module';

describe('RowComponent', () => {
  let component: RowComponent;
  let fixture: ComponentFixture<RowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiLayoutModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
