import { Component, Input } from '@angular/core';
import { ErrorInterface } from '@app/core';

@Component({
  selector: 'mo-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
})
export class ErrorComponent {
  @Input() errors!: ErrorInterface[];
}
