import { Component, Input } from '@angular/core';
import { Colors, Sizes } from '@mo/client/ui-base';
import { ClassColorDirective, ClassSizeDirective } from '@mo/client/util-core';
import { SpinnerComponent } from '../spinner/spinner.component';

@Component({
  selector: 'mo-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: true,
  imports: [ClassSizeDirective, ClassColorDirective, SpinnerComponent],
})
export class ButtonComponent {
  @Input() loading = false;
  @Input() disabled = false;
  @Input() size: Sizes = 'default';
  @Input() color: Colors = 'default';
}
