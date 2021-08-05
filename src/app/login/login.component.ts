import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService, LoginCredentials } from './login.service';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';
import { concatMap } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'daja-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginError = false;
  loginSubscription: Subscription;

  loginForm = this.fb.group({
    username: [null, [Validators.required]],
    password: [null, [Validators.required]]
  });

  constructor(private fb: FormBuilder,
    private router: Router,
    private loginService: LoginService,
    private userService: UserService) { }

  ngOnInit(): void {
    if (this.loginService.getJwtToken()) {
      this.router.navigate(['']);
    }
  }

  logIn(): void {
    const user: LoginCredentials = new LoginCredentials(
      this.loginForm.get('username')!.value,
      this.loginForm.get('password')!.value
    );
    this.loginSubscription = this.loginService
      .logIn(user)
      .pipe(
        concatMap(() => this.userService.getCurrentUser())
      ).subscribe(() => {
        this.loginError = false;
        this.router.navigate(['']);
      },
      () => this.loginError = true);
  }

  ngOnDestroy() {
    if(this.loginSubscription != null)
    this.loginSubscription.unsubscribe();
  }

  logInWithGoogle(): void {
    location.href = "https://accounts.google.com/o/oauth2/v2/auth?client_id=" + environment.GOOGLE_CLIENT_ID
    + "&redirect_uri=" + environment.FRONT_END_URL + "google-login&response_type=id_token%20token&scope=profile&nonce=abcdef";
  }

}
