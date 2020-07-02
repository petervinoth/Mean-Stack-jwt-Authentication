import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {UserServiceService} from '../user-service.service';
import { Router } from "@angular/router";
@Injectable({
    providedIn: 'root'
  })
export class AuthGuard implements CanActivate {

    constructor(private service:UserServiceService,private router:Router){}

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
          if (!this.service.isLoggedIn()) {
            this.router.navigateByUrl('/login');
            this.service.deleteToken();
            return false;
          }
        return true;
        }
    }
