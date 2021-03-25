import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CurrentUserService, UserInfo } from '../current-user/current-user.service';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'daja-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userInfo$: Observable<UserInfo> = null;
  error: Object = null;

  constructor(private loginService: LoginService, private currentUserService: CurrentUserService) { }

  ngOnInit(): void {
    const jwtToken = this.loginService.getJwtToken();
    this.userInfo$ = this.currentUserService.getCurrentUser(jwtToken)
    .pipe(
      catchError(err => {
        this.error = err;
        return throwError(err)
      }));
  }

}
