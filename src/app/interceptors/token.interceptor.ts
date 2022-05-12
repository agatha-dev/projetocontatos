import { Injectable } from "@angular/core";
import { AuthenticationHelper } from "../helpers/authentication.helper";
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Observable } from "rxjs";
 
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
 
    constructor(
        private authenticationHelper: AuthenticationHelper
    ) {
 
    }
 
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
 
        if (!req.url.includes('/api/login')) {
 
            var accessToken = this.authenticationHelper.get()?.accessToken;
            req = req.clone({
                setHeaders: {
                    Authorization: 'Bearer ' + accessToken
                }
            });
        }
 
        return next.handle(req);
    }
}


