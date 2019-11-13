import { Component, OnInit } from '@angular/core';
import { Contato } from '../entidade/contato';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-salvar-contato',
  templateUrl: './salvar-contato.component.html',
  styleUrls: ['./salvar-contato.component.scss'],
})
export class SalvarContatoComponent implements OnInit {
   private rota: Router

      contato: Contato = new Contato();  //objeto da classe que criamos

  constructor(private banco: AngularFireDatabase) { }

  ngOnInit() {}

  salvar(){
    this.banco.list('contato').push(this.contato);
    this.contato= new Contato();
    this.rota.navigate(['listar-contato']);
    alert('Cadastro efetuado!');
  }

}
