import { Component, Input } from '@angular/core';
import { Colors, Sizes } from '@mo/ui-base';

@Component({
  selector: 'mo-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss'],
})
export class TagComponent {
  @Input() size: Sizes = 'default';
  @Input() color: Colors = 'default';
}
