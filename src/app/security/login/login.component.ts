import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {
  SocialAuthService,
  SocialUser,
  GoogleLoginProvider
} from '@abacritt/angularx-social-login';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  socialUser!: SocialUser;
  isLoggedin?: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private socialAuthService: SocialAuthService,
    private cookiesService: CookieService
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.socialAuthService.authState.subscribe(user => {
      this.socialUser = user;
      this.isLoggedin = user != null;
      console.log(this.socialUser);

      //Seteamos el valor del token en las cookies
      this.cookiesService.set('token', this.socialUser.idToken);
    });
  }

  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  logOut(): void {
    this.socialAuthService.signOut();
    //Eliminar Token de las cookies
    this.cookiesService.delete('token');
  }
}
