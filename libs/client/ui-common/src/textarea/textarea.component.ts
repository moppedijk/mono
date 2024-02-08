import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'mo-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
  standalone: true,
  imports: [FormsModule]
})
export class TextareaComponent {
  @Input() placeholder = '';
  @Input() value: string | undefined = '';
  @Output() valueChange = new EventEmitter<string>();
}
