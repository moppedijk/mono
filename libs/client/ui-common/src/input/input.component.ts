import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'mo-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  standalone: true,
  imports: [FormsModule],
})
export class InputComponent {
  @Input() isLoading = true;
  @Input() placeholder = '';
  @Input() value: string | undefined = '';
  @Output() valueChange = new EventEmitter<string>();
}
