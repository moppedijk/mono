import { Component, Input } from '@angular/core';

@Component({
  selector: 'mo-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
})
export class ErrorComponent {
  @Input() errors!: unknown[]
}
