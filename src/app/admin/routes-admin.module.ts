import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DogsComponent } from './Components/dogs/dogs.component';
import { protectoGuard } from '../protector.guard';
import { DirectivasComponent } from './Components/directivas/directivas.component';
import { FormularioComponent } from './Components/formulario/formulario.component';

const routesAdmin: Routes = [
  {
    path: '',
    component: DogsComponent,
    canActivate: [protectoGuard]
  },
  {
    path: 'directivas',
    component: DirectivasComponent
  },
  {
    path: 'formularios',
    component: FormularioComponent
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routesAdmin)],
  exports: [RouterModule]
})
export class RoutesAdminModule {}
