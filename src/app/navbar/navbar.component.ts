import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrentUserService, UserInfo } from '../current-user/current-user.service';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'daja-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  active = 0;
  disabled = true;
  userInfo$: Observable<UserInfo> = null;

  constructor(private loginService: LoginService,
    private currentUserService: CurrentUserService) { }

  ngOnInit(): void {
    this.userInfo$ = this.currentUserService.getCurrentUser();
  }

  isLoggedIn(): boolean {
    return this.currentUserService.isLoggedIn();
  }

  logout(): void {
    this.loginService.logOut();
    this.currentUserService.logOut();
    location.reload();
  }

}
