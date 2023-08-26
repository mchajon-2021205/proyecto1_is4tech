import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DogsComponent } from './Components/dogs/dogs.component';

const routesAdmin: Routes = [
  {
    path: '',
    component: DogsComponent
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routesAdmin)],
  exports: [RouterModule]
})
export class RoutesAdminModule {}
