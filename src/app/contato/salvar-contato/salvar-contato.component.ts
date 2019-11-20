import { Component, OnInit } from '@angular/core';
import { Contato } from '../entidade/contato';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-salvar-contato',
  templateUrl: './salvar-contato.component.html',
  styleUrls: ['./salvar-contato.component.scss'],
})
export class SalvarContatoComponent implements OnInit {
   private rota: Router

      contato: Contato = new Contato();  //objeto da classe que criamos

  constructor(private router: Router, private banco: AngularFireDatabase, private afAuth: AngularFireAuth, private aviso: ToastController) { }

  ngOnInit() {}

  // async mensagemErro() {
  //   const message = await this.aviso.create({
  //     message: 'Ocorreu um erro',
  //     duration: 3000,
  //     buttons: ['Ok']
  //   });
  //   await message.present()
  // }

  salvar(){
    this.afAuth.auth.createUserWithEmailAndPassword(this.contato.email, this.contato.senha).then(
      () => {this.rota.navigate(['notificacao'])}).catch((erro) => console.log(erro));
    this.banco.list('contato').push(this.contato);
    this.contato= new Contato();
    alert('Cadastro efetuado!');
  }


  }
