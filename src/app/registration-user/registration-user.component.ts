import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RegistrationUserService, RegistrationUser } from './registration-user.service';
import { Router } from '@angular/router';
import { CurrentUserService } from '../current-user/current-user.service';
import { LoginCredentials, LoginService } from '../login/login.service';

@Component({
  selector: 'daja-registration-user',
  templateUrl: './registration-user.component.html',
  styleUrls: ['./registration-user.component.scss']
})
export class RegistrationUserComponent implements OnInit {

  registrationUserError = false;

  registrationUserForm = this.fb.group({
    username: [null, [Validators.required, Validators.minLength(1),Validators.maxLength(50)]],
    password: [null, [Validators.required, Validators.minLength(4),Validators.maxLength(100)]]
  });

  constructor(private fb: FormBuilder,
    private router: Router,
    private registrationUserService: RegistrationUserService,
    private currentUserService: CurrentUserService,
    private loginService: LoginService) { }

  ngOnInit(): void {
    if (this.loginService.getJwtToken()) {
      this.router.navigate(['']);
    }
  }

  register(): void {
    const registrationUser: RegistrationUser = new RegistrationUser(
      this.registrationUserForm.get('username')!.value,
      this.registrationUserForm.get('password')!.value
    );
    this.registrationUserService
      .registerUser(registrationUser)
      .subscribe(
        () => {
          this.registrationUserError = false;
          this.loginService.logIn(new LoginCredentials(registrationUser.username, registrationUser.password))
            .subscribe(() =>
              this.currentUserService.getCurrentUser().subscribe(() => this.router.navigate(['']))
            )
        },
        () => this.registrationUserError = true
      );
  }

  get username() { return this.registrationUserForm.get('username'); }

  get password() { return this.registrationUserForm.get('password'); }

}
