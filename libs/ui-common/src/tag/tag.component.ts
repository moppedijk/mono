import { Component, Input } from '@angular/core';

@Component({
  selector: 'mo-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss'],
})
export class TagComponent {
  @Input() size: 'small' | 'default' | 'large' = 'default';
}
