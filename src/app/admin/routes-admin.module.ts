import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DogsComponent } from './Components/dogs/dogs.component';
import { protectoGuard } from '../protector.guard';

const routesAdmin: Routes = [
  {
    path: '',
    component: DogsComponent,
    canActivate: [protectoGuard]
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routesAdmin)],
  exports: [RouterModule]
})
export class RoutesAdminModule {}
