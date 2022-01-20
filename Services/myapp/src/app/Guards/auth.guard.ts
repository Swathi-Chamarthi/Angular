import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authservice:AuthService){}
  canActivate(){
    if(this.authservice.isLoggedin()){
      return true;
    }
    else{
      window.alert("you need to loggin to visit this page");
      return false
    }
  }
  
}
