import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperationComponent } from './Components/operation/operation.component';
import { OperationRoutingModule } from './operation-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    OperationComponent
  ],
  imports: [
    CommonModule,
    OperationRoutingModule,
    SharedModule
  ]
})
export class OperationModule {}
