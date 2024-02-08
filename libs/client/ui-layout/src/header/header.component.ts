import { Component, Input } from '@angular/core';

@Component({
  selector: 'mo-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public isAuthenticated: boolean = false;

  @Input() organization: string = '';
  @Input() creator: string = '';
  @Input() logoUrl: string = '';
  @Input() profileImage: string = '';
}
