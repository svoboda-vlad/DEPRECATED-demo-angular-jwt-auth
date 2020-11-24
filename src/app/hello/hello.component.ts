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

  jwtToken: string;
  hellos: Hello[];

  constructor(private loginService: LoginService, private helloService: HelloService) { }

  ngOnInit(): void {
    this.loginService.login(new User('user', 'password')).subscribe((res) => {
      this.jwtToken = res.headers.get('Authorization');
      this.helloService.getHellos(this.jwtToken).subscribe((hellos: Hello[]) => {
        if(hellos.length == 0) {
          this.helloService.postHello(new Hello('test' + Math.floor(Math.random() * 10).toString()), this.jwtToken).subscribe(() => {
            this.helloService.getHellos(this.jwtToken).subscribe((hellos: Hello[]) => {
              this.hellos = hellos;
            });
          });
        } else {
          this.hellos = hellos;
        }
      });
    });
  }

}
