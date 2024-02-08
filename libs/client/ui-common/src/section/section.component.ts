import { Component, Input } from '@angular/core';
import { Colors } from '@mo/client/ui-base';
import { ClassColorDirective } from '@mo/client/util-core';

@Component({
  selector: 'mo-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
  standalone: true,
  imports: [ClassColorDirective]
})
export class SectionComponent {
  @Input() color: Colors = 'default';
}
