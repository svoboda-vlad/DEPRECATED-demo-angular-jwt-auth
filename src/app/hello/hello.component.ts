import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LoginService, User } from '../login/login.service';
import { Hello, HelloService } from './hello.service';

@Component({
  selector: 'daja-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {

  hello$: Observable<Hello> = null;
  error: Object = null;

  constructor(private helloService: HelloService) { }

  ngOnInit(): void {
    this.hello$ = this.helloService.getHello().pipe(
      catchError(err => {
        this.error = err;
        return throwError(err);
      })
    );;
  }

}
