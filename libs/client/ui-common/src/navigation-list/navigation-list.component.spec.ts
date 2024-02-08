import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationListComponent } from './navigation-list.component';
import { UiCommonModule } from '../ui-common.module';

describe('NavigationListComponent', () => {
  let component: NavigationListComponent;
  let fixture: ComponentFixture<NavigationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiCommonModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
