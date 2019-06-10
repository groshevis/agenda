import { Component, OnInit } from '@angular/core';
import { Contato } from '../entidade/contato';

@Component({
  selector: 'app-salvar-contato',
  templateUrl: './salvar-contato.component.html',
  styleUrls: ['./salvar-contato.component.scss'],
})
export class SalvarContatoComponent implements OnInit {

      contato: Contato = new Contato();  //objeto da classe que criamos

  constructor() { }

  ngOnInit() {}

  salvar(){
    alert('ce vai senta na cabeça');
  }

}
