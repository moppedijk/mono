import { Component } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faSlash, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'mo-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  standalone: true,
  imports: [FaIconComponent],
})
export class SpinnerComponent {
  public faSlash: IconDefinition;

  constructor() {
    this.faSlash = faSlash;
  }
}
