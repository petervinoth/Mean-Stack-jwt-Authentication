import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';



import {UserServiceService} from '../user-service.service';
import { Router } from "@angular/router";

@Injectable()
export class AuthInterctor implements HttpInterceptor {

    constructor(private userService : UserServiceService,private router : Router){}

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        if (req.headers.get('noauth'))
        return next.handle(req.clone());
    else {
        const clonedreq = req.clone({
            headers: req.headers.set("Authorization", "Bearer " + this.userService.getToken())
        });
        return next.handle(clonedreq).pipe(
            tap(
                event => { },
                err => {
                    if (err.error.auth == false) {
                        this.router.navigateByUrl('/login');
                    }
                })
        );
    }
}
}