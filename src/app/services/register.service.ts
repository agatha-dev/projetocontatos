import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Usuario } from "../models/usuario.model";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { retry } from "rxjs";
 
@Injectable({
    providedIn: 'root'
})
export class RegisterService {
 
    endpoint: string = environment.apiContatos + "/register/";
 
    constructor(
        private httpClient: HttpClient
    ) {
 
    }
 
    //POST
    createRegister(data: any): Observable<Usuario> {
        return this.httpClient
            .post<Usuario>(this.endpoint, data)
            .pipe(retry(1));
    }
}
 
 

