import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UserService, User } from '../user/user.service';

@Component({
  selector: 'daja-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  currentUser$: Observable<User | boolean> = null;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.currentUser$ = this.userService.getCurrentUser()
      .pipe(
        catchError(() => this.router.navigate(['/login']))
      );
  }

}
