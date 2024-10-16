import { Component, Input } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'mo-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  standalone: true,
  imports: [ModalComponent],
})
export class UserProfileComponent {
  public isModalVisible = false;

  @Input() creator = '';
  @Input() profileImage = '';
}
