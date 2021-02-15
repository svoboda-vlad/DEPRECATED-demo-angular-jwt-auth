import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {

  currentUserUrl = 'current-user';

  constructor(private http: HttpClient) { }

  getCurrentUser(jwtToken: string) : Observable<UserInfo> {
    const options = {
      headers: new HttpHeaders({
        Authorization: jwtToken
      })
    };
    return this.http.get<UserInfo>(environment.SERVER_URL + this.currentUserUrl, options);
  }

}

export class UserInfo {
  username: string;
}
