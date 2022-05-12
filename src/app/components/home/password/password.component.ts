import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationHelper } from 'src/app/helpers/authentication.helper';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { PasswordService } from 'src/app/services/password.service';
 
@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
 
  mensagem_sucesso: string = '';
  mensagem_erro: string = '';
 
  constructor(
    private authenticationHelper: AuthenticationHelper,
    private passwordService: PasswordService,
    private spinner: NgxSpinnerService,
    private router: Router
  ) { }
 
  ngOnInit(): void {
    if (this.authenticationHelper.get())
      this.router.navigate(['/consulta-contatos']);
  }
 
  formPassword = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });
 
  get form(): any {
    return this.formPassword.controls;
  }
 
  onSubmit(): void {
 
    this.mensagem_sucesso = '';
    this.mensagem_erro = '';
 
    this.spinner.show();
 
    this.passwordService.createPassword(this.formPassword.value)
      .subscribe({
        next: (res) => {
          this.mensagem_sucesso = `${res.nome}, verifique seu email para criar uma nova senha de acesso.`;
          this.formPassword.reset();
          this.spinner.hide();
        },
        error: (e) => {
          switch (e.status) {
            case 422:
              this.mensagem_erro = e.error.message;
              break;
            default:
              this.mensagem_erro = 'Ocorreu um erro.'
              break;
          }
          this.spinner.hide();
        }
      });
  }
}
 
 

