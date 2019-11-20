import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Login } from './entidade/entidade';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  email: string;
  senha: string;
  login: Login = new Login;

  constructor(private rota: Router, private afAuth: AngularFireAuth, private aviso: ToastController) { }

  async mensagemErro() {
    const message = await this.aviso.create({
      message: 'Ocorreu um erro ',
      duration: 4000,
      buttons: ['Entendi']
    });
    await message.present()
  }

  logar() {
    this.afAuth.auth.signInWithEmailAndPassword(this.email, this.senha).then(
      () => { this.rota.navigate(['notificacao']); }).catch((erro) => this.mensagemErro());
  }

  ngOnInit() { }


}
