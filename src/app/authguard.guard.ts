import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate, CanActivateChild  {

  canActivate(next: ActivatedRouteSnapshot, 
  	          state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean  {
    return true;

  }
 canActivateChild(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }  
}
