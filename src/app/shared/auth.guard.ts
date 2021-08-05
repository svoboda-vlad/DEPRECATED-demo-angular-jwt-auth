import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private userService: UserService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.userService.getCurrentUser().pipe(
      map(user => {
        if (user) {
          const role = route.data['role'];

          if (!role || role.length === 0) {
            return true;
          }

          const userRoles = user.userRoles.find(r => r.role.name == role);
          if (userRoles) return true;

          this.router.navigate(['/home']);
          return false;
        }

        this.router.navigate(['/login']);
        return false;
      })
    );


  }

}
