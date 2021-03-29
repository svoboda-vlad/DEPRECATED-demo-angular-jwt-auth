import { Component, OnInit } from '@angular/core';
import { CurrentUserService, CurrentUser } from '../current-user/current-user.service';

@Component({
  selector: 'daja-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userInfo: CurrentUser = null;

  constructor(private currentUserService: CurrentUserService) { }

  ngOnInit(): void {
    this.currentUserService.getCurrentUser().subscribe((res) => this.userInfo = res);
  }

  isLoggedIn(): boolean {
    return this.currentUserService.isLoggedIn();
  }

}
