import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CurrentUserService, UserRoles } from '../current-user/current-user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private currentUserService: CurrentUserService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.currentUserService.getCurrentUser().pipe(
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
