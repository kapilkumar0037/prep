import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
    selector: '[appNumericOnly]'
})
export class NumbericOnlyDirective {
    constructor(private el: ElementRef) {}

    @HostListener('input', ['$event']) onInputChange(event: any) {
        const initalValue = this.el.nativeElement.value;
        this.el.nativeElement.value = initalValue.replace(/[^0-9]*/g, '');
    }
}