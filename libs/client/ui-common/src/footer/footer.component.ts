import { Component, Input } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { Colors } from '@mo/client/ui-base';
import { ClassColorDirective } from '@mo/client/util-core';

@Component({
  selector: 'mo-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  imports: [ClassColorDirective, FaIconComponent],
})
export class FooterComponent {
  @Input() projectName = '';
  @Input() projectLink = '';
  @Input() color: Colors = 'default';

  public icon: IconDefinition = faCode;
}
