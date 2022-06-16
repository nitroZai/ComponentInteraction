import { OnInit, Directive, ElementRef, Renderer2, HostListener, HostBinding, Input } from '@angular/core';


@Directive({

    selector: '[appRendererHighlight]'

})
export class RendererHighlightDirective implements OnInit {

    @Input() defaultColor: string = 'white';
    @Input() highLightColor: string = 'yellow';

    constructor(private element: ElementRef, private renderer: Renderer2){

    }

    ngOnInit(): void {
        
    
    }

    @HostBinding('style.backgroundColor') color!: string;

    @HostListener('mouseenter') onmouseover(){
        this.color = this.highLightColor;
        // this.color = 'red';
        // this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'blue')
    }

    @HostListener('mouseleave') onmouseleave(){
        this.color = this.defaultColor;
        // this.color = 'green'
        // this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'green')
    }

}