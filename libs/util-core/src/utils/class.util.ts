import { ElementRef } from "@angular/core";

export const generateClassList = (elementRef: ElementRef, className: string, modifier: string): DOMTokenList => {
    const classList = elementRef.nativeElement.classList as DOMTokenList;

    if (className.length < 1) {
      return classList;
    }
    
    classList.add(`${className.trim()}--${modifier.trim()}`);

    return classList;
}