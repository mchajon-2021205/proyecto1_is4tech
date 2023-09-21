import { Component } from '@angular/core';
import { DatosAuditoria } from 'src/app/Interfaces/datos-auditoria';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})
export class OperationComponent {
  click: boolean = false
  datosAuditoria: DatosAuditoria = {
    userCreated: 'Esteban Estrada',
    dateCreated: '05/12/2023',
    userUpdated: 'Josseline Castaño',
    dateUpdated: '16/12/2023'
  }

  //Abir dialogo
  abrirDialogo(){
    this.click = true
  }

  //Cerrar dialogo
  dialogoCerrado(click: boolean){
    this.click = click
  }   
}
