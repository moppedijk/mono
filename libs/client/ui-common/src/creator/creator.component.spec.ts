import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorComponent } from './creator.component';
import { UiCommonModule } from '../ui-common.module';

describe('CreatorComponent', () => {
  let component: CreatorComponent;
  let fixture: ComponentFixture<CreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiCommonModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
