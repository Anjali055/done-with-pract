import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserServiceService } from './user-service.service';


@Injectable({
  providedIn: 'root'
})
export class AuthactgaurdGuard implements CanActivate {

  constructor(private authService:UserServiceService){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    
if(this.authService.ISadminright()){
  return false;

}else{
  alert("you dont have permission");

}
    

  } 
  
}
