import { Directive, ElementRef, OnInit, Renderer2, HostListener, Input } from '@angular/core';


@Directive({
    selector: '[appDir]'
})
export class AppDirective implements OnInit{
    @Input()
    color;
    @HostListener('mouseenter')
    mouseClick(){
        this.r2.setStyle(this.el.nativeElement, 'color', 'green')
    }
    @HostListener('mouseleave')
    mouseClickdsds(){
        this.r2.setStyle(this.el.nativeElement, 'color', 'blue')
    }
    constructor(
        private el: ElementRef,
        private r2: Renderer2
    ){
        console.log(this.el)
    }

    ngOnInit(){
        this.r2.setStyle(this.el.nativeElement, "color", this.color)
    }
}