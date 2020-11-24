import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HelloService {

  helloUrl = 'hello';

  constructor(private http: HttpClient) { }

  getHellos(jwtToken: string) : Observable<Hello[]> {
    const options = {
      headers: new HttpHeaders({
        Authorization: jwtToken
      })
    };
    return this.http.get<Hello[]>(environment.SERVER_URL + this.helloUrl, options);
  }

  postHello(hello: Hello, jwtToken: string) : Observable<Hello> {
    const options = {
      headers: new HttpHeaders({
        Authorization: jwtToken
      })
    };
    return this.http.post<Hello>(environment.SERVER_URL + this.helloUrl, hello, options);
  }


}

export class Hello {
  id: number;
  content: string;

  constructor(content: string) {
    this.content = content;
  }
}
