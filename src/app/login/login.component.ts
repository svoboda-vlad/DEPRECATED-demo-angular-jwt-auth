import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService, User } from './login.service';
import { Router } from '@angular/router';

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
    private loginService: LoginService) { }

  ngOnInit(): void {
    if(this.loginService.getJwtToken()) {
      this.router.navigate(['']);
    }
  }

  login(): void {
    const user: User = new User(
      this.loginForm.get('username')!.value,
      this.loginForm.get('password')!.value
    );
    this.loginService
      .login(user)
      .subscribe(
        () => {
          this.loginError = false;
          this.router.navigate(['']);
        },
        () => (this.loginError = true)
      );
  }

  useDefaultCredentials(): void {
    const defaultUser: User = new User('user', 'password');
    this.loginForm.patchValue({
      username: defaultUser.username,
      password: defaultUser.password
    });
  }

}
