import { Component, Input } from '@angular/core';

@Component({
  selector: 'mo-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  @Input() project: string = '';
}
