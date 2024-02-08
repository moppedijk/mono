import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'mo-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.scss'],
  standalone: true,
})
export class SkeletonComponent {
  @Input() width = '100%';
  @Input() height = '10rem';

  @HostBinding('style.width') public styleWidth = this.width;
}
