import { Component, Input } from '@angular/core';
import { MeInterface } from '@app/data/authentication/interfaces';

@Component({
  selector: 'mo-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent {
  @Input() me: MeInterface | null = null;
}
// todo: profile picture
