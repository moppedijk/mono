import { Component, Input } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { Colors } from '@mo/ui-base';

@Component({
  selector: 'mo-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  @Input() project: string = '';
  @Input() projectLink: string = '';
  @Input() color: Colors = 'default';

  public icon: IconDefinition = faCode;
}
