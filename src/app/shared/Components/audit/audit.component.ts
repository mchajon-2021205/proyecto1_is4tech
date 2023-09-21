import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DatosAuditoria } from 'src/app/Interfaces/datos-auditoria';

@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.css']
})
export class AuditComponent {
  @Input() cerrar: boolean
  @Input() datosAuditoria: DatosAuditoria
  @Output() dialogoCerrado = new EventEmitter<boolean>()


  cerrarDialogo(){
    this.cerrar = false
    this.dialogoCerrado.emit(this.cerrar)
  }

}
