import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { AuthenticationHelper } from 'src/app/helpers/authentication.helper';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mensagem: string = '';

  constructor(
    private loginService: LoginService,
    private authenticationHelper: AuthenticationHelper,
    private spinner: NgxSpinnerService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if(this.authenticationHelper.get()) 
      this.router.navigate(['/consulta-contatos']);
  }

  formLogin = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', [Validators.required])
  });

  get form(): any {
    return this.formLogin.controls;
  }

  onSubmit(): void {
    this.spinner.show();

    this.loginService.createLogin(this.formLogin.value)
    .subscribe({
      next: (res) => {

        this.authenticationHelper.signIn(res);
        this.router.navigate(['/consulta-contatos']);

        this.spinner.hide();
      },
      error: (e) => { 
        switch(e.status) {
          case 401:
            this.mensagem = e.error.message;
            break;
        }
        this.spinner.hide();

      }
    });
  }

}
