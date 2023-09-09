import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogsComponent } from './Components/dogs/dogs.component';
import { RoutesAdminModule } from './routes-admin.module';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HijoComponent } from './Components/hijo/hijo.component';
import { ParametrosEntradaComponent } from './Components/parametros-entrada/parametros-entrada.component';

@NgModule({
  declarations: [DogsComponent, HijoComponent, ParametrosEntradaComponent],
  imports: [
    CommonModule,
    RoutesAdminModule,
    SharedModule,
    HttpClientModule,
    FormsModule
  ]
})
export class AdminModule {}
