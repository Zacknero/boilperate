import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighLight]',
  standalone: true,
})
export class HighLightDirective {
  constructor(private element: ElementRef) {
    this.element.nativeElement.style.backgroundColor = '#5f5aee';
    this.element.nativeElement.style.color = 'black';
    this.element.nativeElement.style.padding = '0.5rem';
  }
}
