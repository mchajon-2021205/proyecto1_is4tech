import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RoutesSecurityModule } from './routes-security.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, RoutesSecurityModule]
})
export class SecurityModule {}
