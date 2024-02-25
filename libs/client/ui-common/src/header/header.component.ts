import { Component, Input } from '@angular/core';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'mo-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [UserProfileComponent, RouterModule]
})
export class HeaderComponent {
  public isAuthenticated = false;

  @Input() organizationName = '';
  @Input() logoUrl = '';
  @Input() profileImage = '';
}
