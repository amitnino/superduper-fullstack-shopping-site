  
import { Directive, ElementRef, Input, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() appHighlight: string = '';
  constructor(public element: ElementRef) {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.ngAfterViewInit();
  }

  ngAfterViewInit() {
    const elementCurrentInnerHtml = this.element.nativeElement?.innerText.split('\n').join('');
    if (!elementCurrentInnerHtml) return;
    const queryStringRegExp = new RegExp(this.appHighlight, 'gi');
    const match = elementCurrentInnerHtml.match(queryStringRegExp);
    if (!match || match.some((x: any) => !x)) {
      this.element.nativeElement.innerText = elementCurrentInnerHtml;
    } else {
      this.element.nativeElement.innerHTML = elementCurrentInnerHtml.replace(
        queryStringRegExp,
        '<mark>' + match[0] + '</mark>'
      );
    }
  }
}