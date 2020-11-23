import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class TestService {

    public testUrl = 'test';

    constructor(private http: HttpClient) { }

    getTest() : Observable<Test> {
      return this.http.get<Test>(environment.SERVER_URL + this.testUrl);
    }

}

export class Test {
  id: number;
  text: string;
}
