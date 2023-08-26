import {
  Directive,
  HostListener,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Directive({
  selector: '[appWhiteSpace]'
})
export class WhiteSpaceDirective {
  @Input('appWhiteSpace') recibir = ''; //Recibe el valor que se le indicara
  @Output() modificarV = new EventEmitter<string>(); //Devolver el valor modificado

  @HostListener('click')
  modificarValor() {
    const modificarText = this.recibir.trim(); // Modificar el valor
    this.modificarV.emit(modificarText); // Emitir el valor modificado
  }
}
