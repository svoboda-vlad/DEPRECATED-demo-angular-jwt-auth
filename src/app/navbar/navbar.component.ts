import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CurrentUserService, UserInfo } from '../current-user/current-user.service';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'daja-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  active = 0;
  disabled = true;
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
