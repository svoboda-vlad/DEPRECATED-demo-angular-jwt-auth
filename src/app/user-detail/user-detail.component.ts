import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LoginService } from '../login/login.service';
import { User, UserService } from '../user/user.service';

@Component({
  selector: 'daja-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit, OnDestroy {

  user$: Observable<User | boolean> = null;
  error: Object = null;
  deleteUserSubscription: Subscription;
  deleteError: Object = null;

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router, private loginService: LoginService) {
  }

  ngOnInit(): void {
    this.user$ = this.userService.getCurrentUser()
      .pipe(
        catchError(() => this.router.navigate(['/login']))
      );
  }

  ngOnDestroy() {
    if (this.deleteUserSubscription != null) this.deleteUserSubscription.unsubscribe();
  }

  deleteUser(id: number) {
    this.deleteUserSubscription = this.userService.deleteUser()
      .subscribe(() => {
        this.deleteError = false;
        this.loginService.logOut();
        this.userService.logOut();
        this.router.navigate(['/login']);
      },
      () => this.deleteError = true);
  }

}
