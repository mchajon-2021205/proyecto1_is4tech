import { Component, OnChanges, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-parametros-entrada',
  templateUrl: './parametros-entrada.component.html',
  styleUrls: ['./parametros-entrada.component.css']
})
export class ParametrosEntradaComponent implements OnChanges {


  @Input() actualizar!: string
  mostrando?: any
  valorActual?:string 
  valorAnterior?:string
  
  ngOnChanges(changes: SimpleChanges): void {
  console.log(changes)
  this.mostrando = changes
  this.valorActual = this.mostrando.actualizar.currentValue
  this.valorAnterior = this.mostrando.actualizar.previousValue 
  }

}
