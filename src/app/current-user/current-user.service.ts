import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {

  private currentUserUrl = 'current-user';
  private currentUser: UserInfo = null;

  constructor(private http: HttpClient) { }

  getCurrentUser() : Observable<UserInfo> {
    if (this.currentUser) {
      return of(this.currentUser);
    }

    return this.http.get<UserInfo>(environment.SERVER_URL + this.currentUserUrl)
    .pipe(map(res => this.currentUser = res));
  }

  isLoggedIn(): boolean {
    return this.currentUser !== null;
  }

  logOut(): void {
    this.currentUser = null;
  }

}

export class UserInfo {
  username: string;
}
