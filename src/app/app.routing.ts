import { NgModule } from "@angular/core";  
import { Routes, RouterModule } from "@angular/router"; 
import { ContatosGuard } from "./guards/contato.guard";

import { CadastroContatosComponent } from './components/admin/cadastro-contatos/cadastro-contatos.component';
import { ConsultaContatosComponent } from './components/admin/consulta-contatos/consulta-contatos.component';
import { EdicaoContatosComponent } from './components/admin/edicao-contatos/edicao-contatos.component';
import { LoginComponent } from "./components/home/login/login.component";
import { RegisterComponent } from "./components/home/register/register.component";
import { PasswordComponent } from "./components/home/password/password.component";

//mapeamento de rotas
const routes : Routes = [ 
    { path: '', pathMatch: 'full', redirectTo: 'login'},
    { path : 'login', component: LoginComponent },
    { path : 'register', component: RegisterComponent },
    { path: 'password', component: PasswordComponent },
    { path : 'cadastro-contatos', component : CadastroContatosComponent, canActivate: [ContatosGuard] },
    { path : 'consulta-contatos', component : ConsultaContatosComponent, canActivate: [ContatosGuard] },
    { path: 'edicao-contatos/:id', component: EdicaoContatosComponent, canActivate: [ContatosGuard]},
];

@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports : [RouterModule]

})

export class AppRoutingModule { }
