import { Component, Input } from '@angular/core';

@Component({
  selector: 'mo-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent {
  @Input() name: string = '';
  @Input() imageUrl: string = '';
}
