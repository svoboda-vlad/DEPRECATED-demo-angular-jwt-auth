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

  private userUrl = 'user';
  private user: User = null;

  constructor(private http: HttpClient,
    private errorResponseService: ErrorResponseService) { }

  getCurrentUser() : Observable<User> {
    return this.http.get<User>(environment.SERVER_URL + this.userUrl)
    .pipe(map(res => this.user = res),
    catchError(this.errorResponseService.handleError));
  }

  isLoggedIn(): boolean {
    return this.user !== null;
  }

  isAdmin(): boolean {
    return this.user.userRoles.filter(r => r.role.name == 'ROLE_ADMIN').length != 0;
  }

  logOut(): void {
    this.user = null;
  }

  registerUser(registrationUser: RegistrationUser) : Observable<RegistrationUser> {
    return this.http.post<RegistrationUser>(environment.SERVER_URL + this.userUrl, registrationUser).pipe(
      catchError(this.errorResponseService.handleError));
  }

  deleteUser() : Observable<void> {
    return this.http.delete<void>(environment.SERVER_URL + this.userUrl).pipe(
      catchError(this.errorResponseService.handleError));
  }

  updateUser(user: User) : Observable<User> {
    return this.http.put<User>(environment.SERVER_URL + this.userUrl, user).pipe(
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

  constructor(username: string, lastLoginDateTime: Date, previousLoginDateTime: Date, givenName: Date, familyName: Date, userRoles: UserRoles[]) {
      this.username = username;
      this.lastLoginDateTime = lastLoginDateTime;
      this.previousLoginDateTime = previousLoginDateTime;
      this.givenName = givenName;
      this.familyName = familyName;
      this.userRoles = userRoles;
    }

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
