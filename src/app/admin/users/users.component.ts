import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from 'src/app/current-user/current-user.service';
import { UsersService } from './users.service';

@Component({
  selector: 'daja-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users$: Observable<User[]> = null;
  error: Object = null;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
      this.users$ = this.usersService.getAllUsers().pipe(
        catchError(err => {
          this.error = err;
          return throwError(err);
        })
      );
  }


}
