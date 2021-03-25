import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Hello, HelloService } from '../hello/hello.service';
import { LoginService, User } from '../login/login.service';

@Component({
  selector: 'daja-hello-restricted',
  templateUrl: './hello-restricted.component.html',
  styleUrls: ['./hello-restricted.component.scss']
})
export class HelloRestrictedComponent implements OnInit {

  jwtToken: string;
  hello$: Observable<Hello> = null;
  error: Object = null;

  constructor(private helloService: HelloService) { }

  ngOnInit(): void {
      this.hello$ = this.helloService.getHelloRestricted().pipe(
        catchError(err => {
          this.error = err;
          return throwError(err);
        })
      );
  }

}
