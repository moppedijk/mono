import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'mo-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
})
export class TextareaComponent {
  @Input() placeholder = '';
  @Input() value: string | undefined = '';
  @Output() valueChange = new EventEmitter<string>();
}
