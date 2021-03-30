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
  private currentUser: CurrentUser = null;

  constructor(private http: HttpClient,
    private errorResponseService: ErrorResponseService) { }

  getCurrentUser() : Observable<CurrentUser> {
    return this.http.get<CurrentUser>(environment.SERVER_URL + this.currentUserUrl)
    .pipe(map(res => this.currentUser = res),
    catchError(this.errorResponseService.handleError));
  }

  isLoggedIn(): boolean {
    return this.currentUser !== null;
  }

  logOut(): void {
    this.currentUser = null;
  }

}

export class CurrentUser {
  username: string;
}
