import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService, User } from '../login/login.service';
import { Hello, HelloService } from './hello.service';

@Component({
  selector: 'taja-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {

  hello: Hello;

  constructor(private helloService: HelloService) { }

  ngOnInit(): void {
      this.helloService.getHello().subscribe((hello: Hello) => {
          this.hello = hello;
      });
  }

}
