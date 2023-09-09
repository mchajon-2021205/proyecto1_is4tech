import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnChanges{

  @Input() cambio!: string;
  @Input() actualizar!:string;


 ngOnChanges(changes: SimpleChanges): void {
    console.log('Cambio desde hijo', this.cambio)
 }



}
