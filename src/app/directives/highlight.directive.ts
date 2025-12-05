import { Directive, ElementRef, HostBinding, HostListener, input, Renderer2 } from "@angular/core";

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
    appHighlight = input('yellow');
    constructor(private el: ElementRef, private renderer: Renderer2) {}
    @HostBinding('style.color') textColor = 'green';
    @HostListener('mouseenter') onMouseEnter() {
        this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', this.appHighlight() || 'yellow');
        this.renderer.setStyle(this.el.nativeElement, 'color', 'red');

    }

    @HostListener('mouseleave') onMouseLeave() {
        this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'transparent');
    }
}