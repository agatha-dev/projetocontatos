import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { ContatosGuard } from './guards/contato.guard';

import { AppComponent } from './app.component';
import { CadastroContatosComponent } from './components/admin/cadastro-contatos/cadastro-contatos.component';
import { ConsultaContatosComponent } from './components/admin/consulta-contatos/consulta-contatos.component';
import { EdicaoContatosComponent } from './components/admin/edicao-contatos/edicao-contatos.component';
import { LoginComponent } from './components/home/login/login.component';
import { PasswordComponent } from './components/home/password/password.component';
import { RegisterComponent } from './components/home/register/register.component';
import { ResultContatoComponent } from './components/shared/result-contato/result-contato.component';
 
export const options: Partial<IConfig | null> | (() => Partial<IConfig>) = null;


@NgModule({
  declarations: [
    AppComponent,
    CadastroContatosComponent,
    ConsultaContatosComponent,
    EdicaoContatosComponent,
    LoginComponent,
    PasswordComponent,
    RegisterComponent,
    ResultContatoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    NgxMaskModule.forRoot(),
    NgxPaginationModule,
    FilterPipeModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  },
  ContatosGuard
],
  bootstrap: [AppComponent]
})
export class AppModule { }
 
