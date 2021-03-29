import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService, LoginCredentials } from './login.service';
import { Router } from '@angular/router';
import { CurrentUserService } from '../current-user/current-user.service';

@Component({
  selector: 'daja-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginError = false;

  loginForm = this.fb.group({
    username: [null, [Validators.required]],
    password: [null, [Validators.required]]
  });

  constructor(private fb: FormBuilder,
    private router: Router,
    private loginService: LoginService,
    private currentUserService: CurrentUserService) { }

  ngOnInit(): void {
    if(this.loginService.getJwtToken()) {
      this.router.navigate(['']);
    }
  }

  logIn(): void {
    const user: LoginCredentials = new LoginCredentials(
      this.loginForm.get('username')!.value,
      this.loginForm.get('password')!.value
    );
    this.loginService
      .logIn(user)
      .subscribe(
        () => {
          this.loginError = false;
          this.currentUserService.getCurrentUser().subscribe(() => this.router.navigate(['']));
        },
        () => (this.loginError = true)
      );
  }

  useDefaultCredentials(): void {
    const defaultUser: LoginCredentials = new LoginCredentials('user', 'password');
    this.loginForm.patchValue({
      username: defaultUser.username,
      password: defaultUser.password
    });
  }

}
