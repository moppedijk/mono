import { Component, Input } from '@angular/core';
import { Colors } from '@mo/ui-base';

@Component({
  selector: 'mo-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  @Input() project: string = '';
  @Input() color: Colors = 'primary';
}
