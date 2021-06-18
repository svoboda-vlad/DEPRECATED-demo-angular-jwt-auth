import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ErrorResponseService } from '../shared/error-response.service';

@Injectable({
  providedIn: 'root'
})
export class GoogleLoginService {

  googleLoginUrl = "google-login";
  authorizationHeader = "Authorization";
  jwtKey = "jwt";

  constructor(private http: HttpClient,
    private errorResponseService: ErrorResponseService) { }

  logIn(idToken: IdTokenGoogle): Observable<void> {
    return this.http.post(environment.SERVER_URL + this.googleLoginUrl, idToken, { observe: 'response' })
      .pipe(map(res => localStorage.setItem(this.jwtKey, res.headers.get(this.authorizationHeader))),
        catchError(this.errorResponseService.handleError)
      );
  }

  getJwtToken(): string {
    return localStorage.getItem(this.jwtKey);
  }

  logOut(): void {
    localStorage.removeItem(this.jwtKey);
  }

}

export class IdTokenGoogle {
  idToken: string;

  constructor(i: string) {
    this.idToken = i;
  }
}
