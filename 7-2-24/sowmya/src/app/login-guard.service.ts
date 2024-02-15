// login-guard.service.ts
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    // You can add additional logic here based on your authentication state
    const isLoggedIn = /* Check if the user is logged in */ true;

    if (isLoggedIn) {
      return true; // Allow navigation to the route
    } else {
      // Redirect to the login page if the user is not logged in
      this.router.navigate(['/login']);
      return false;
    }
  }
}
