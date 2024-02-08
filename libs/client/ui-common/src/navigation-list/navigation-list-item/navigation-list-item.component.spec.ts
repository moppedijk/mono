import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationListItemComponent } from './navigation-list-item.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('NavigationListItemComponent', () => {
  let component: NavigationListItemComponent;
  let fixture: ComponentFixture<NavigationListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationListItemComponent, RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
