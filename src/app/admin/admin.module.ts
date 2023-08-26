import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogsComponent } from './Components/dogs/dogs.component';
import { RoutesAdminModule } from './routes-admin.module';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DogsComponent],
  imports: [
    CommonModule,
    RoutesAdminModule,
    SharedModule,
    HttpClientModule,
    FormsModule
  ]
})
export class AdminModule {}
