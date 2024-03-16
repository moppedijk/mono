import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'mo-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss'],
  standalone: true,
  imports: [FormsModule],
})
export class InputNumberComponent {
  @Input() isLoading = true;
  @Input() placeholder = '';
  @Input() value: number | null = null;
  @Output() valueChange = new EventEmitter<number>();
}
