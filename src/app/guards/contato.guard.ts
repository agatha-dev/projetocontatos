import { Injectable } from "@angular/core";
import { AuthenticationHelper } from "../helpers/authentication.helper";
import { Router } from "@angular/router";
import { CanActivate } from "@angular/router";
 
@Injectable()
export class ContatosGuard implements CanActivate {
 
    constructor(
        private authenticationHelper: AuthenticationHelper,
        private router: Router
    ) {
 
    }
 
    canActivate() {
 
        //verificar se o usuário está autenticado
        if (this.authenticationHelper.get())
            return true;
 
        this.router.navigate(['/login']);
        return false;
    }
 
}
 


