import { HttpClient } from '@angular/common/http';
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

  getHelloRestricted() : Observable<Hello> {
    return this.http.get<Hello>(environment.SERVER_URL + this.helloRestrictedUrl);
  }

}

export class Hello {
  text: string;

  constructor(text: string) {
    this.text = text;
  }
}
