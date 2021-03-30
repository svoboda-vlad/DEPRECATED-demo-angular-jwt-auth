import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ErrorResponseService } from '../shared/error-response.service';

@Injectable({
  providedIn: 'root'
})
export class HelloService {

  helloUrl = 'hello';
  helloRestrictedUrl = 'hello-restricted';

  constructor(private http: HttpClient,
    private errorResponseService: ErrorResponseService) { }

  getHello(): Observable<Hello> {
    return this.http.get<Hello>(environment.SERVER_URL + this.helloUrl).pipe(
      catchError(this.errorResponseService.handleError)
    );
  }

  getHelloRestricted(): Observable<Hello> {
    return this.http.get<Hello>(environment.SERVER_URL + this.helloRestrictedUrl).pipe(
      catchError(this.errorResponseService.handleError)
    );
  }

}

export class Hello {
  text: string;

  constructor(text: string) {
    this.text = text;
  }
}
