import { Component } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent {
  color: string = "rgb(25, 255, 220)"
  segundoColor: string = 'white'
  valorInput: number = 0
  numero: string = ''
  valorCopiado: string = 'Hola mundo'
  cortarCadena = 'Este es un texto para probar la funcionalidad del pipe'

  formatoValor(valor: string): void {
    this.numero = valor
  }
}
