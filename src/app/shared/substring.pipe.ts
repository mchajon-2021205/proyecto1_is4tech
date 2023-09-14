import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'substring'
})
export class SubstringPipe implements PipeTransform {

  transform(cadena: string, limite: number): string {
    if(cadena === null || cadena === undefined) return cadena
    if(limite === null || limite === undefined || limite < 0) return cadena
    if(limite > cadena.length) return cadena
    return `${cadena.substring(0, limite)}...`
  }

}
