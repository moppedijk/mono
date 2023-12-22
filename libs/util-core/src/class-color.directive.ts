import { Directive, ElementRef, Input, OnChanges, OnInit, inject } from '@angular/core';
import { Colors } from '@mo/ui-base';
import { generateClassList } from './class.util';

@Directive({
  selector: '[moClassColor]',
  standalone: true,
})
export class ClassColorDirective implements OnInit, OnChanges {

  private elementRef = inject(ElementRef);

  @Input() moClassColor: {
    color: Colors,
    className: string,
  } = {
    color: 'default',
    className: '',
  }

  public ngOnInit(): void {
    this.elementRef.nativeElement.classList = generateClassList(this.elementRef, this.moClassColor.className, this.moClassColor.color);
  }

  public ngOnChanges(): void {
    this.elementRef.nativeElement.classList = generateClassList(this.elementRef, this.moClassColor.className, this.moClassColor.color);
  }
}
