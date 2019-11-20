import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Motivo} from './motivo/motivo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notificacao',
  templateUrl: './notificacao.component.html',
  styleUrls: ['./notificacao.component.scss'],
})
export class NotificacaoComponent implements OnInit {
   motivo: Motivo = new Motivo();

  constructor(private banco: AngularFireDatabase, private rota: Router) { }

  ngOnInit() {}


    salvar(){
      this.banco.list('motivo').push(this.motivo);
      this.motivo= new Motivo();
      this.rota.navigate(['listar-contato']);
    }

}
