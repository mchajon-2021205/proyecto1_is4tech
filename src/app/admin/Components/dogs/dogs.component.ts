import { Component, OnInit } from '@angular/core';
import { DogServiceService } from '../../Services/dog-service.service';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {
  message: any = '';
  valorTextArea = '';
  inputValue?: string;
  modifiedText?: string;

  constructor(private dogService: DogServiceService) {}

  ngOnInit(): void {
    this.peticionImagen();
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
}
