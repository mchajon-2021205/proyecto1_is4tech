import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RoutesSecurityModule } from './routes-security.module';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, RoutesSecurityModule, FormsModule, SharedModule],
  providers: [CookieService]
})
export class SecurityModule {}
