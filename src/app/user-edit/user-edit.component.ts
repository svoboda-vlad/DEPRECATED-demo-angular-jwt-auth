import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User, UserService } from '../user/user.service';

@Component({
  selector: 'daja-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit, OnDestroy {

  userUpdateError = false;
  error: Object = null;
  userUpdateSubscription: Subscription;
  user$: Observable<User> = null;
  userObject: User = null;

  userEditForm = this.fb.group({
    givenName: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]],
    familyName: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]]
  });

  constructor(private fb: FormBuilder,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
      this.user$ = this.userService.getCurrentUser().pipe(
        map(user => {
          this.userObject = user;
          this.userEditForm.patchValue({
            givenName: user.givenName,
            familyName: user.familyName
          });
          return user;
        }),
        catchError(err => {
          this.error = err;
          return throwError(err);
        })
      )
  }

  updateUser(): void {
    const user: User = new User(
      this.userObject.username,
      this.userObject.lastLoginDateTime,
      this.userObject.previousLoginDateTime,
      this.userEditForm.get('givenName')!.value,
      this.userEditForm.get('familyName')!.value,
      this.userObject.userRoles
    );
    this.userUpdateSubscription = this.userService
      .updateUser(user)
      .subscribe(
        () => {
          this.userUpdateError = false;
          this.router.navigate(['/user']);
        },
        () => this.userUpdateError = true
      );
  }

  get givenName() { return this.userEditForm.get('givenName'); }

  get familyName() { return this.userEditForm.get('familyName'); }

  ngOnDestroy() {
    if (this.userUpdateSubscription != null) this.userUpdateSubscription.unsubscribe();
  }

}
