import { Component, Input } from '@angular/core';
import { Colors, Sizes } from '@mo/client/ui-base';
import { ClassColorDirective, ClassSizeDirective } from '@mo/client/util-core';

@Component({
  selector: 'mo-button-anker',
  templateUrl: './button-anker.component.html',
  styleUrls: ['./button-anker.component.scss'],
  standalone: true,
  imports: [ClassSizeDirective, ClassColorDirective]
})
export class ButtonAnkerComponent {
  @Input() size: Sizes = 'default';
  @Input() color: Colors = 'default';
  @Input() link = '';
  @Input() title = '';
}
