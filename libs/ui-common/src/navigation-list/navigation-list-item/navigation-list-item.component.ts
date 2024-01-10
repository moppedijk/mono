import { Component, Input } from '@angular/core';

@Component({
  selector: 'mo-navigation-list-item',
  templateUrl: './navigation-list-item.component.html',
  styleUrls: ['./navigation-list-item.component.scss'],
})
export class NavigationListItemComponent {
  @Input() url: string;
  @Input() title: string;

  constructor() {
    this.url = '';
    this.title = '';
  }
}
