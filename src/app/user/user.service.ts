import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError, map } from 'rxjs/operators';
import { ErrorResponseService } from '../shared/error-response.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private currentUserUrl = 'user';
  private registrationUserUrl = 'user';
  private currentUser: User = null;

  constructor(private http: HttpClient,
    private errorResponseService: ErrorResponseService) { }

  getCurrentUser() : Observable<User> {
    return this.http.get<User>(environment.SERVER_URL + this.currentUserUrl)
    .pipe(map(res => this.currentUser = res),
    catchError(this.errorResponseService.handleError));
  }

  isLoggedIn(): boolean {
    return this.currentUser !== null;
  }

  isAdmin(): boolean {
    return this.currentUser.userRoles.filter(r => r.role.name == 'ROLE_ADMIN').length != 0;
  }

  logOut(): void {
    this.currentUser = null;
  }

  registerUser(registrationUser: RegistrationUser) : Observable<RegistrationUser> {
    return this.http.post<RegistrationUser>(environment.SERVER_URL + this.registrationUserUrl, registrationUser).pipe(
      catchError(this.errorResponseService.handleError));
  }

}

export class User {
  username: string;
  lastLoginDateTime: Date;
  previousLoginDateTime: Date;
  givenName: Date;
  familyName: Date;
  userRoles: UserRoles[];
}

export class UserRoles {
  role: Role;
}

export class Role {
  name: string;
}

export class RegistrationUser {
  username: string;
  password: string;
  givenName: string;
  familyName: string;

  constructor(username: string, password: string, givenName: string, familyName: string) {
    this.username = username;
    this.password = password;
    this.givenName = givenName;
    this.familyName = familyName;
  }
}
