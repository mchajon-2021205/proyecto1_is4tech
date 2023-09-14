import { Directive, Input, ElementRef, HostListener, Renderer2 } from '@angular/core';


@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input('appHighlight') color!: string
  @Input() segundoColor!:string

  constructor(
    private elemento: ElementRef,
    private renderer2: Renderer2
  )
  {}

  @HostListener('mouseover') mouseover(){
    this.renderer2.setStyle(this.elemento.nativeElement,   'background-color', this.color)
    this.renderer2.setStyle(this.elemento.nativeElement, 'transition', '300ms')
    this.renderer2.setStyle(this.elemento.nativeElement, 'box-shadow', '0px 0px 5px black')
  }

  @HostListener('mouseout') mouseout(){
    this.renderer2.setStyle(this.elemento.nativeElement, 'background-color', this.segundoColor)
    this.renderer2.setStyle(this.elemento.nativeElement, 'box-shadow', 'none')

  }



}
