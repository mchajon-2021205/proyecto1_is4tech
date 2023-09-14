import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Validaciones } from 'src/app/utils/validaciones';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  form!: FormGroup
  nuevoRegistro: boolean = false

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.buildForm()
  }


  private buildForm() {
    this.form = this.formBuilder.group({
      name: [
        '',
        [
          Validaciones.NoSpecialCharacteresValidator,
          Validators.maxLength(45),
          Validaciones.NoEmptyValidator,
          Validaciones.WhiteSpace
        ]
      ],
      date: [
        '',
        [
          Validators.required,
          Validaciones.fecha,
        ]
      ],
      nit: [
        '',
        [
          Validaciones.WhiteSpace,
          Validators.required,
          Validaciones.Nit
        ]
      ],
      textArea: [
        '',
        [
          Validaciones.NoSpecialCharacteresValidator,
          Validaciones.NoEmptyValidator,
          Validators.maxLength(200),
          Validaciones.WhiteSpace
        ]
      ],
      phone: [''],
      address: ['']
    })
  }

  save(event: Event) {
    event.preventDefault()
    this.form.get('name').setValue('')
    this.form.get('date').setValue('')
    this.form.get('nit').setValue('')
    this.form.get('textArea').setValue('')
    this.form.get('phone').setValue('')
    this.form.get('address').setValue('')

    this.form.markAsUntouched();
  }



  //Nuevo Registro
  nuevoResitroActive(event: any): void {
    this.nuevoRegistro = event.checked
    //Hacer que sean requridos
    if(event.checked){
      this.form.controls['phone'].setValidators([Validators.required,  Validators.maxLength(8), Validators.minLength(8)])
      this.form.controls['address'].setValidators(Validators.required)
    }else{
      this.form.controls['phone'].clearValidators()
      this.form.controls['address'].clearValidators()
    }

    this.form.controls['phone'].updateValueAndValidity()
    this.form.controls['address'].updateValueAndValidity()

  }


  limpiar(){
    //Resetiar todos los campos
    this.form.get('name').setValue('')
    this.form.get('date').setValue('')
    this.form.get('nit').setValue('')
    this.form.get('textArea').setValue('')
    this.form.get('phone').setValue('')
    this.form.get('address').setValue('')

    this.form.markAsUntouched();
  }
  

}
