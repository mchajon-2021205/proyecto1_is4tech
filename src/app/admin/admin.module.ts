import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogsComponent } from './Components/dogs/dogs.component';
import { RoutesAdminModule } from './routes-admin.module';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HijoComponent } from './Components/hijo/hijo.component';
import { ParametrosEntradaComponent } from './Components/parametros-entrada/parametros-entrada.component';
import { DirectivasComponent } from './Components/directivas/directivas.component';
import { RouterModule } from '@angular/router';
import { FormularioComponent } from './Components/formulario/formulario.component';
import { MaterialModule } from '../material.module';





@NgModule({
  declarations: [DogsComponent, HijoComponent, ParametrosEntradaComponent, DirectivasComponent, FormularioComponent],
  imports: [
    CommonModule,
    RoutesAdminModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  
})
export class AdminModule {}
