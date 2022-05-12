import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Auth } from "../models/auth.model";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { retry } from "rxjs";
 
@Injectable({
    providedIn: 'root'
})
export class LoginService {
 
   endpoint: string = environment.apiContatos + "/login/";

   constructor(

    private httpClient: HttpClient
   ){

   }

   //post
   createLogin(data: any): Observable<Auth> {
       return this.httpClient
       .post<Auth>(this.endpoint, data)
       .pipe(retry(1));
   }
 
}


