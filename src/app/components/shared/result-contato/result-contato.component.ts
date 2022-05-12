import { Component, OnInit, Input } from '@angular/core';
import { Contato } from 'src/app/models/contato.model';
 
@Component({
  selector: 'app-result-contato',
  templateUrl: './result-contato.component.html',
  styleUrls: ['./result-contato.component.css']
})
export class ResultContatoComponent implements OnInit {
 
  @Input() mensagem: string = '';
  @Input() contato: Contato = new Contato();
 
  constructor() { }
 
  ngOnInit(): void {
  }
 
}
 



