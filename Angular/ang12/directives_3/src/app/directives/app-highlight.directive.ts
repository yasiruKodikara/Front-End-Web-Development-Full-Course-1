import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class AppHighlightDirective {
  nativeElement: any;

  constructor(private el :ElementRef) {
    this.nativeElement.style.backgrounColor = 'yellow'
   }

}
