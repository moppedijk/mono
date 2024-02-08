import { Component, Input } from '@angular/core';

@Component({
  selector: 'mo-col',
  templateUrl: './col.component.html',
  styleUrls: ['./col.component.scss'],
  standalone: true
})
export class ColComponent {
  @Input() flex = '1';
}
