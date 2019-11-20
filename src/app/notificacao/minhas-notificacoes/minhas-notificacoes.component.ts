import { Component, OnInit } from '@angular/core';
import { Motivo} from '../motivo/motivo';
import * as _ from 'lodash';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-minhas-notificacoes',
  templateUrl: './minhas-notificacoes.component.html',
  styleUrls: ['./minhas-notificacoes.component.scss'],
})
export class MinhasNotificacoesComponent implements OnInit {

  ListaNotificacao: Observable<Motivo[]>;
  listaFiltro: Motivo[];
  filtro = {};
  valor: string;
  motivo:any;


  constructor(private rota: Router,  private fire: AngularFireDatabase,  private modal: ModalController) {
    this.ListaNotificacao = this.fire.list<Motivo>('motivo')
      .snapshotChanges().pipe(
        map(lista => lista.map(linha => ({
          key: linha.payload.key, ...linha.payload.val()
        })))

      );}

  ngOnInit() {
    this.ListaNotificacao.subscribe(motivo => {
      this.motivo = motivo;
      this.listaFiltro = _.filter(this.motivo, _.conforms(this.filtro));
    })
  }


  filtrar() {
    this.filtro['nomedofilho'] = val => val.includes(this.valor);
    this.listaFiltro = _.filter(this.motivo, _.conforms(this.filtro));
  }
}
