import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RoutesSecurityModule } from './routes-security.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, RoutesSecurityModule, FormsModule]
})
export class SecurityModule {}
