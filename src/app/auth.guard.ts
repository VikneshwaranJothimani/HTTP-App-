import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(public loginSer :LoginService, public myRouter : Router)
  {

  }
  canActivate():  boolean {

    if(!this.loginSer.isLoggedIn())
    {
      this.myRouter.navigateByUrl("/");
    }

    return this.loginSer.isLoggedIn();
  }
  
}
