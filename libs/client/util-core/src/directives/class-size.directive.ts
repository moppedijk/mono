import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  inject,
} from '@angular/core';
import { Sizes } from '@mo/client/ui-base';
import { generateClassList } from '../utils/class.util';

@Directive({
  selector: '[moClassSize]',
  standalone: true,
})
export class ClassSizeDirective implements OnInit, OnChanges {
  private elementRef = inject(ElementRef);

  @Input() moClassSize: {
    size: Sizes;
    className: string;
  } = {
    size: 'default',
    className: '',
  };

  public ngOnInit(): void {
    this.elementRef.nativeElement.classList = generateClassList(
      this.elementRef,
      this.moClassSize.className,
      this.moClassSize.size,
    );
  }

  public ngOnChanges(): void {
    this.elementRef.nativeElement.classList = generateClassList(
      this.elementRef,
      this.moClassSize.className,
      this.moClassSize.size,
    );
  }
}
