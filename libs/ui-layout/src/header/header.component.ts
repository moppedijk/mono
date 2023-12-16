import { Component } from '@angular/core';

@Component({
  selector: 'mo-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public isAuthenticated: boolean = false;
}
