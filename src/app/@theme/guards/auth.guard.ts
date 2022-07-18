import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanDeactivate<unknown>, CanLoad {

  constructor(private _router: Router, private auth: AuthService) { }

  canActivate() {
    if (!this.auth.isAuthenticated()) {
      this._router.navigate(['auth']);
      return false;
    }

    return true;
  }

  canActivateChild() {
    return true;
  }

  canDeactivate(){
    return true;
  }

  canLoad(){
    return true;
  }
}
