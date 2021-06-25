import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription, throwError } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';
import { CurrentUserService } from '../current-user/current-user.service';
import { GoogleLoginService, IdTokenGoogle } from './google-login.service';

@Component({
  selector: 'daja-google-login',
  templateUrl: './google-login.component.html',
  styleUrls: ['./google-login.component.scss']
})
export class GoogleLoginComponent implements OnInit {

  accessTokenKey = "access_token";
  error: Object = null;
  googleLogin$: Observable<void> = null;

  constructor(private router: Router,
    private googleLoginService: GoogleLoginService,
    private currentUserService: CurrentUserService) { }

  ngOnInit(): void {
    let accessToken = "";
    let idToken = "";
    const hashParams = location.hash.replace("#","").split("&");
    hashParams.forEach((param) => {
      const p = param.split("=");
      if (p[0] == "access_token") accessToken = p[1];
      if (p[0] == "id_token") idToken = p[1];
    });
    localStorage.setItem(this.accessTokenKey, accessToken);
    const idTokenGoogle: IdTokenGoogle = new IdTokenGoogle(idToken);

    this.googleLogin$ = this.googleLoginService
      .logIn(idTokenGoogle)
      .pipe(
        concatMap(
          () => this.currentUserService.getCurrentUser().pipe(
            map(() => {
              this.router.navigate(['']);
             })
             )
          ),
          catchError(err => {
            this.error = err;
            return throwError(err);
          })
      );
  }

}
