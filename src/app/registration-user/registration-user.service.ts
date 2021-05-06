import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ErrorResponseService } from '../shared/error-response.service';

@Injectable({
  providedIn: 'root'
})
export class RegistrationUserService {
  registrationUserUrl = 'register';

  constructor(private http: HttpClient,
    private errorResponseService: ErrorResponseService) { }

  registerUser(registrationUser: RegistrationUser) : Observable<RegistrationUser> {
    return this.http.post<RegistrationUser>(environment.SERVER_URL + this.registrationUserUrl, registrationUser).pipe(
      catchError(this.errorResponseService.handleError));
  }

}

export class RegistrationUser {
  username: string;
  password: string;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }
}
