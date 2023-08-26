import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogsComponent } from './Components/dogs/dogs.component';
import { RoutesAdminModule } from './routes-admin.module';

@NgModule({
  declarations: [DogsComponent],
  imports: [CommonModule, RoutesAdminModule]
})
export class AdminModule {}
