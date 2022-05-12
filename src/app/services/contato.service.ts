import  {  Injectable } from "@angular/core";
import { HttpClient  } from "@angular/common/http";
import { Contato  } from "../models/contato.model";
import { environment } from "src/environments/environment";
import { Observable, observable, retry } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class ContatoService { 

    endpoint : string = environment.apiContatos + "/contatos/";

    constructor(
        private httpClient: HttpClient
    ){    
    }

    createContato(data: any) : Observable<Contato> {
        return this.httpClient.post<Contato>(this.endpoint, data) //passar dois parametros obrigatorios
            .pipe(retry(1)); //tenta uma vez, se n da erro
    }

    updateContato(data: any) : Observable<Contato> {
        return this.httpClient.put<Contato>(this.endpoint, data) //passar dois parametros obrigatorios
            .pipe(retry(1)); //tenta uma vez, se n da erro
    }

    deleteContato(id: string) : Observable<Contato> {
        return this.httpClient.delete<Contato>(this.endpoint + id) 
            .pipe(retry(1)); //tenta uma vez, se n da erro
    }
    
    getContatos() : Observable<Contato[]> {
        return this.httpClient.get<Contato[]>(this.endpoint) 
            .pipe(retry(1)); //tenta uma vez, se n da erro
    }

    getContato(id: string) : Observable<Contato> {
        return this.httpClient.get<Contato>(this.endpoint + id) //passar dois parametros obrigatorios
            .pipe(retry(1)); //tenta uma vez, se n da erro
    }

}