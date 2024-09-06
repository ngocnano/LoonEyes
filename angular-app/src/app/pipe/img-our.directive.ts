import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[myHighlight]',
  standalone: true,
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()'
  }
})
export class HighlightDirective {
  private _defaultColor = 'linear-gradient(180deg, rgba(21, 51, 156, 0.8) -11.36%, rgba(27, 47, 117, 0.096) 104.55%)';
  private el: HTMLElement;

  constructor(el: ElementRef) { this.el = el.nativeElement; }

  @Input('myHighlight') url!: string;

  onMouseEnter() { this.highlight(this._defaultColor + `, url('${this.url}')`); }
  onMouseLeave() { this.highlight(`url('${this.url}')`); }

   private highlight(color:string) {
    this.el.style.background = color;
    this.el.className = 'image_our h100'
  }

}