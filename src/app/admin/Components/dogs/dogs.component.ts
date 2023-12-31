import { Component, OnInit, OnDestroy } from '@angular/core';
import { DogServiceService } from '../../Services/dog-service.service';
import { DatosAuditoria } from 'src/app/Interfaces/datos-auditoria';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit,  OnDestroy {
  message: any = '';
  valorTextArea = '';
  inputValue?: string;
  modifiedText?: string;
  onChange: string = '';
  valorActualizado: string = 'Hola Mundo'
  click: boolean = false
  datosAuditoria: DatosAuditoria = {
    userCreated: 'Eduardo Fernando',
    dateCreated: '12/02/2021',
    userUpdated: 'Marlon Chajon',
    dateUpdated: '14/02/2021'
  }


  constructor(private dogService: DogServiceService) {}


  ngOnInit(): void {
    this.peticionImagen();
    setTimeout(
      () => {
        this.valorActualizado = 'Hola Casa'
      }, 30000)
    }

  //Destruir
  ngOnDestroy(): void {
    console.log('Destruccion del componente')
  }

  //Peticion de la imagen
  peticionImagen() {
    this.dogService
      .get('https://dog.ceo/api/breeds/image/random')
      .subscribe(res => {
        //Agregar el valor de respuesta
        this.message = res;
      });
  }

  //Metodo para cambiar de imagen
  cambiarImage() {
    this.dogService
      .get('https://dog.ceo/api/breeds/image/random')
      .subscribe(res => {
        this.message = res;
      });
  }

  modificarValorButton(modifiedValue: string) {
    this.modifiedText = modifiedValue;
    console.log((this.modifiedText = modifiedValue));
    this.valorTextArea = '';
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
