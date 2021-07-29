import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError, map } from 'rxjs/operators';
import { ErrorResponseService } from '../shared/error-response.service';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {

  private currentUserUrl = 'current-user';
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
