import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'mo-navigation-list-item',
  templateUrl: './navigation-list-item.component.html',
  styleUrls: ['./navigation-list-item.component.scss'],
  standalone: true,
  imports: [RouterModule]
})
export class NavigationListItemComponent {
  @Input() url: string;
  @Input() title: string;

  constructor() {
    this.url = '';
    this.title = '';
  }
}
