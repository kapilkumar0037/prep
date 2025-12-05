import { Directive, ElementRef, HostListener, input, Renderer2 } from "@angular/core";

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective {
    tooltipText = input('');
    tooltipEl : HTMLElement | null = null;

    constructor(private el:ElementRef, private renderer: Renderer2) {

    }


    @HostListener('mouseenter') onMouseEnter() {
        this.tooltipEl =  this.renderer.createElement('span');
        const text = this.renderer.createText(this.tooltipText() || 'Tooltip text');

        this.renderer.appendChild(this.tooltipEl, text);
        this.renderer.appendChild(document.body, this.tooltipEl);

    }

        @HostListener('mouseleave') onMouseLeave() {
        this.renderer.removeChild(document.body, this.tooltipEl);

    }
}