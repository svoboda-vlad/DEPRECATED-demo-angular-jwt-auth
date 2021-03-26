import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {

  currentUserUrl = 'current-user';
  currentUser: UserInfo = null;

  constructor(private http: HttpClient) { }

  getCurrentUser(jwtToken: string) : Observable<UserInfo> {
    if (this.currentUser) {
      return of(this.currentUser);
    }

    const options = {
      headers: new HttpHeaders({
        Authorization: jwtToken
      })
    };
    return this.http.get<UserInfo>(environment.SERVER_URL + this.currentUserUrl, options)
    .pipe(map(res => this.currentUser = res));
  }

}

export class UserInfo {
  username: string;
}
