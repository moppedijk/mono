import { Component, Input } from '@angular/core';

@Component({
  selector: 'mo-introduction',
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.scss',
})
export class IntrodctionComponent {
  @Input() title = '';
  @Input() lead = '';
}
