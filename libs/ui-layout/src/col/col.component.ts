import { Component, Input } from '@angular/core';

@Component({
  selector: 'mo-col',
  templateUrl: './col.component.html',
  styleUrls: ['./col.component.scss'],
})
export class ColComponent {
  @Input() flex = '1';
}
