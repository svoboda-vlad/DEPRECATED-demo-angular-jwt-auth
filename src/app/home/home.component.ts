import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CurrentUserService, CurrentUser } from '../current-user/current-user.service';

@Component({
  selector: 'daja-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  currentUser$: Observable<CurrentUser | boolean> = null;

  constructor(private router: Router, private currentUserService: CurrentUserService) { }

  ngOnInit(): void {
    this.currentUser$ = this.currentUserService.getCurrentUser()
      .pipe(
        catchError(() => this.router.navigate(['/login']))
      );
  }

}
