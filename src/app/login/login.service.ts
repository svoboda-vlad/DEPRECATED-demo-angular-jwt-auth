import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginUrl = "login";

  constructor(private http: HttpClient) { }

  login(user: User): any {
    return this.http.post(environment.SERVER_URL + this.loginUrl, user, { observe: 'response' });
  }
}

export class User {
  username: string;
  password: string;

  constructor(u: string, p: string) {
    this.username = u;
    this.password = p;
  }
}
