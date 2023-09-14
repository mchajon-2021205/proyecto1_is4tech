import { Directive,  HostListener, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appBlur]'
})
export class BlurDirective {
  @Input('appBlur') valor!: number;
  @Output() formateado = new EventEmitter<string>()

  constructor() {}

  @HostListener('blur') onBlur() {
    let formatearValor = this.valor.toLocaleString('es-GT')
    this.formateado.emit(formatearValor)
  }
 
}
