import { Component, Input } from '@angular/core';
import { Colors, Sizes } from '@mo/client/ui-base';
import { ClassColorDirective, ClassSizeDirective } from '@mo/client/util-core';

@Component({
  selector: 'mo-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss'],
  standalone: true,
  imports: [ClassColorDirective, ClassSizeDirective]
})
export class TagComponent {
  @Input() size: Sizes = 'default';
  @Input() color: Colors = 'default';
}
