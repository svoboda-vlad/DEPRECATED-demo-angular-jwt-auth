import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HelloService {

  helloUrl = 'hello';
  helloRestrictedUrl = 'hello-restricted';

  constructor(private http: HttpClient) { }

  getHello() : Observable<Hello> {
    return this.http.get<Hello>(environment.SERVER_URL + this.helloUrl);
  }

  getHelloRestricted(jwtToken: string) : Observable<Hello> {
    const options = {
      headers: new HttpHeaders({
        Authorization: jwtToken
      })
    };
    return this.http.get<Hello>(environment.SERVER_URL + this.helloRestrictedUrl, options);
  }

}

export class Hello {
  text: string;

  constructor(text: string) {
    this.text = text;
  }
}
