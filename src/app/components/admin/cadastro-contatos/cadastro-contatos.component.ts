import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContatoService } from 'src/app/services/contato.service';
import { Contato } from 'src/app/models/contato.model';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-cadastro-contatos',
  templateUrl: './cadastro-contatos.component.html',
  styleUrls: ['./cadastro-contatos.component.css']
})
export class CadastroContatosComponent implements OnInit {

  //atributos
  mensagem: string = '';
  contato: Contato = new Contato();

  constructor(
    private contatoService: ContatoService,
    private spinnerService: NgxSpinnerService
  ) { }

  ngOnInit(): void {
  }

  //criando formulário 
  formCadastro = new FormGroup({

    //campo do formulário
    nome : new FormControl('', [
      Validators.required, 
      Validators.minLength(8),
      Validators.maxLength(150)
    ]),

    //campo 
    email : new FormControl('', [
      Validators.required,
      Validators.email
    ]),

    //campo
    telefone : new FormControl('', [
      Validators.required
    ])

  });

  //função para retornar os controles do formulario
  get form() : any {
    return this.formCadastro.controls;
  }

  //função para capturar o submit do formulario
  onSubmit() : void {
    this.spinnerService.show();

    this.contatoService.createContato(
        this.formCadastro.value
    )
    .subscribe(
      res => {
        this.mensagem = "Contato cadastrado com sucesso.";
        this.contato = res;
        this.formCadastro.reset();
        this.spinnerService.hide();
      }
    )
  }
}
