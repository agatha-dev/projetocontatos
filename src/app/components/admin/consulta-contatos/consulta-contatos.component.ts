import { Component, OnInit } from '@angular/core';
import { ContatoService } from 'src/app/services/contato.service';
import { Contato } from 'src/app/models/contato.model';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-consulta-contatos',
  templateUrl: './consulta-contatos.component.html',
  styleUrls: ['./consulta-contatos.component.css']
})
export class ConsultaContatosComponent implements OnInit {

  mensagem: string = '';
  contato: Contato = new Contato();
  contatos: Contato[] = [];
  pagina: number = 1;
  filtro: any = { nome: '' };

  constructor(
    private contatoService: ContatoService,
    private spinnerService: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.onInit();
  }

  onInit(): void {
    this.spinnerService.show()
    this.contatoService.getContatos()
    .subscribe(
      res => {
        this.contatos = res;
        this.spinnerService.hide();
      }
    )
  }

  onDelete(id: string): void {
    if(window.confirm('Deseja realmente excluir o contato?')) {
      this.spinnerService.show();
      this.contatoService.deleteContato(id)
        .subscribe(
          res => {
            this.mensagem = "Contato excluído com sucesso.";
            this.contato = res;
            this.spinnerService.hide();
            this.onInit();
          }
        )
    }
  }

  handlePageChange(event: number): void{
    this.pagina = event;
  }

}
