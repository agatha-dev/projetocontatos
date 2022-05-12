import { Injectable } from "@angular/core";
import { Auth } from "../models/auth.model";

@Injectable({
    providedIn: 'root'
})
export class AuthenticationHelper {
    auth_user: string= 'AUTH_USER';
    
    signIn(auth: Auth): void {
        let json = JSON.stringify(auth);
        localStorage.setItem(this.auth_user, json);
    }

    signOut(): void {
        localStorage.removeItem(this.auth_user);
    }

    get() : Auth | null {
        let auth = localStorage.getItem(this.auth_user);
        if(auth != null)
            return JSON.parse(auth) as Auth;
        return null;
    }
}