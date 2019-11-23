import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { StudentComponent } from './student/student.component';

@Injectable({
  providedIn: 'root'
})
export class GaurdCanDeacitveGuard implements CanDeactivate<StudentComponent> {
    canDeactivate():boolean{
      return window.confirm('do you want to exit');
    }
  
}
