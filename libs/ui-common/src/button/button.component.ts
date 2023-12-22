import { Component, Input } from '@angular/core';
import { Colors, Sizes } from '@mo/ui-base';

@Component({
  selector: 'mo-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() loading = false;
  @Input() disabled = false;
  @Input() size: Sizes = 'default';
  @Input() color: Colors = 'default';
}
