import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationHelper } from 'src/app/helpers/authentication.helper';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { PasswordValidator } from 'src/app/validators/password.validator';
import { RegisterService } from 'src/app/services/register.service';
 
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
  mensagem_sucesso: string = '';
  mensagem_erro: string = '';
 
  constructor(
    private authenticationHelper: AuthenticationHelper,
    private registerService: RegisterService,
    private spinner: NgxSpinnerService,
    private router: Router
  ) { }
 
  ngOnInit(): void {
    if (this.authenticationHelper.get())
      this.router.navigate(['/consulta-contatos']);
  }
 
  formRegister = new FormGroup({
 
    nome: new FormControl('',
      [Validators.required, Validators.minLength(8), Validators.maxLength(150)]),
 
    email: new FormControl('',
      [Validators.required, Validators.email]),
 
    senha: new FormControl('',
      [Validators.required, Validators.minLength(8), Validators.maxLength(20)]),
 
    senhaConfirmacao: new FormControl('',
      [Validators.required])
  }, {
    validators: [PasswordValidator.MatchPassword]
  });
 
  get form(): any {
    return this.formRegister.controls;
  }
 
  onSubmit(): void {
 
    this.mensagem_sucesso = '';
    this.mensagem_erro = '';
 
    this.spinner.show();
 
    this.registerService.createRegister(this.formRegister.value)
      .subscribe({
        next: (res) => {
          this.mensagem_sucesso = `Parabéns ${res.nome}, sua conta foi criada com sucesso.`;
          this.formRegister.reset();
          this.spinner.hide();
        },
        error: (e) => {
          switch(e.status){
            case 422:
              this.mensagem_erro = e.error.message;
              break;
          }
          this.spinner.hide();          
        }
      });
  }
}
 
 

