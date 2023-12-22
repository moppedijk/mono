import { Component, Input } from '@angular/core';
import { Colors } from '@mo/ui-base';

@Component({
  selector: 'mo-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
})
export class SectionComponent {
  @Input() color: Colors = 'default';
}
