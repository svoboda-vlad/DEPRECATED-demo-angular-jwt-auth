import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CurrentUserService, UserInfo } from '../current-user/current-user.service';
import { LoginService, User } from '../login/login.service';

@Component({
  selector: 'daja-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  jwtToken: string;
  userInfo$: Observable<UserInfo> = null;
  error: Object = null;

  constructor(private loginService: LoginService, private currentUserService: CurrentUserService) { }

  ngOnInit(): void {
    this.loginService.login(new User('user', 'password')).pipe(
      catchError(err => {
        this.error = err;
        return throwError(err);
      })
    ).subscribe((res) => {
      this.jwtToken = res.headers.get('Authorization');
      this.userInfo$ = this.currentUserService.getCurrentUser(this.jwtToken).pipe(
        catchError(err => {
          this.error = err;
          return throwError(err);
        })
      );
    });
  }

}
