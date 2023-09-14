import { AbstractControl } from '@angular/forms'

export class Validaciones {

    //Solo numero Y letras
    static NoSpecialCharacteresValidator(control: AbstractControl) {
        const value = control.value
        if (!/^[a-zA-Z0-9 ]*$/.test(value)) {
            return { NoSpecialCharacteresValidator: true }
        }
        return null
    }

    //Campos en blanco
    static NoEmptyValidator(control: AbstractControl) {
        const value = control.value
        
        if (value === '' || value === null || value === undefined) {
            return { NoEmptyValidator: true }
        }
        return false
    }


    //Espacios en blanco inicio y final
    static WhiteSpace(control: AbstractControl) {
        const value = control.value
        let arregloValue = Array.from(value)
            //Validar si el primer y ultimo espacio esta vacio
            if (arregloValue[0] === ' ' || arregloValue[arregloValue.length - 1] === ' ') {
                console.log('No pase')
                return { WhiteSpace: true }
            }

        console.log('Pase')
        return null
    }


    //Bloquear si se pasa
    static BlockField(max: number ){
        return (control: AbstractControl) => {
            const value = control.value
            
        }
    }

    //Validacion fecha
    static fecha(control: AbstractControl) {
        const value = control.value
        if (value > new Date()) {
            return { fecha: true }
        }
        return null
    }


    //Valida NIT
    static Nit(control: AbstractControl){
        const value = control.value
        if(!/^\d{5}-\d$/.test(value)){
            return {Nit: true}
        }

        return null
    }




}