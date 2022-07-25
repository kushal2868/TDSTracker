import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, CanLoad, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { CommonService } from '../services/common.service';
import { JwtTokenService } from '../services/jwt-token.service';
import { StoreTokenService } from '../services/store-token.service';

@Injectable({
  providedIn: 'root'
})
export class CommonModuleGuard implements CanActivate, CanActivateChild, CanDeactivate<unknown>, CanLoad {

  permission;
  constructor(private jwtToken: JwtTokenService, private storeTokenService: StoreTokenService,
    private commonService: CommonService, private router: Router, private toaster: NbToastrService) {

  }
  canActivate(route: ActivatedRouteSnapshot) {

    this.jwtToken.setToken(this.storeTokenService.get('token'));
    let moduleName = route.data["moduleName"];
    var permission = this.jwtToken.getDecodeToken(moduleName);
    this.permission = this.commonService.decToBin(permission);

    if (this.permission[1] == "1") return true;
    else {
      this.toaster.danger("You have No permission to view these Module");
      this.router.navigate(["/pages"]);
      return false;
    }
  }
  canActivateChild() {
    return true;
  }
  canDeactivate() {
    return true;
  }
  canLoad() {
    return true;
  }
}
