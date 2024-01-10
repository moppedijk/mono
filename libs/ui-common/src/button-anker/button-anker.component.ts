import { Component, Input } from '@angular/core';
import { Colors, Sizes } from '@mo/ui-base';

@Component({
  selector: 'mo-button-anker',
  templateUrl: './button-anker.component.html',
  styleUrls: ['./button-anker.component.scss'],
})
export class ButtonAnkerComponent {
  @Input() size: Sizes = 'default';
  @Input() color: Colors = 'default';
  @Input() link: string = '';
  @Input() title: string = '';
}
