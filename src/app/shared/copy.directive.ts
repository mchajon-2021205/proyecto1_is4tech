import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';

@Directive({
  selector: '[appCopy]'
})
export class CopyDirective {
  agregar?: HTMLElement
  alerta?: HTMLElement
   @Input('appCopy') valorCopiado!: string 

  constructor(
    private elemento: ElementRef,
    private renderer2: Renderer2,
    private clipboardApi: ClipboardService
    ) { }


    @HostListener('mouseenter') mouseover(){
      //Botton
      this.agregar = this.renderer2.createElement('button')
      this.renderer2.addClass(this.agregar, 'btn')
      this.renderer2.addClass(this.agregar, 'btn-danger')
      this.renderer2.setStyle(this.agregar, 'height', '35px')
      this.renderer2.setStyle(this.agregar, 'margin-left', '1rem')

      //Icono
      let icono = this.renderer2.createElement('i')
      this.renderer2.addClass(icono, 'bi')
      this.renderer2.addClass(icono, 'bi-copy')
      this.renderer2.setStyle(icono, 'font-size', '15px')

      //Escuchar Evento
       this.renderer2.listen(this.agregar, 'click', () => this.copyText()) 
      
      this.renderer2.appendChild(this.agregar, icono)
      this.renderer2.appendChild(this.elemento.nativeElement, this.agregar)
    }

      @HostListener('mouseleave') mouseout(){
        this.renderer2.removeChild(this.elemento.nativeElement, this.agregar)
     }  


     //Funcion para copiar el texto
     copyText(){
      console.log(this.valorCopiado)
      this.clipboardApi.copyFromContent(this.valorCopiado) 
  /*     this.alerta =  this.renderer2.createElement('p')
      this.renderer2.addClass(this.alerta, 'alert')
      this.renderer2.addClass(this.alerta, 'alert-success')

      this.renderer2.appendChild(this.elemento.nativeElement, this.alerta)
      this.renderer2.removeChild(this.elemento.nativeElement, this.alerta) */
      alert('Valor Copiado')
    }

}
