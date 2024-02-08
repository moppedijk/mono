import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CodeService } from './code.service';

@Component({
  selector: 'mo-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss'],
  standalone: true,
})
export class CodeComponent implements OnChanges {
  public value!: string;

  constructor(private codeService: CodeService) {}

  @Input() code: string | undefined = '';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['code'].currentValue) {
      this.value = this.codeService.highlight(changes['code'].currentValue);
    }
  }
}
