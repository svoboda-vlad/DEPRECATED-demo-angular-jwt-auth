import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorResponseService } from 'src/app/shared/error-response.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  adminUsersUrl = 'admin/users';

  constructor(private http: HttpClient,
    private errorResponseService: ErrorResponseService) { }

  getAllUsers() : Observable<User[]> {
    return this.http.get<User[]>(environment.SERVER_URL + this.adminUsersUrl).pipe(
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
