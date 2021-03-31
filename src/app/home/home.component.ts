import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrentUserService, CurrentUser } from '../current-user/current-user.service';

@Component({
  selector: 'daja-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userInfo$: Observable<CurrentUser> = null;

  constructor(private currentUserService: CurrentUserService) { }

  ngOnInit(): void {
    this.userInfo$ = this.currentUserService.getCurrentUser();
  }

  isLoggedIn(): boolean {
    return this.currentUserService.isLoggedIn();
  }

}
