import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { SalvarContatoComponent } from './contato/salvar-contato/salvar-contato.component';
import { ListarContatoComponent } from './contato/listar-contato/listar-contato.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import {NotificacaoComponent} from './notificacao/notificacao.component';
import { AngularFireAuth } from 'angularfire2/auth';
import { MinhasNotificacoesComponent } from './notificacao/minhas-notificacoes/minhas-notificacoes.component';

@NgModule({
  declarations: [AppComponent, SalvarContatoComponent, ListarContatoComponent, NotificacaoComponent, MinhasNotificacoesComponent ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, AngularFireDatabaseModule,
    AngularFireModule.initializeApp({ //configuração
    apiKey: "AIzaSyCHM5pdcN8_8wNRYZRkNCaGpg1QZAar-FM",
    authDomain: "agenda-feba3.firebaseapp.com",
    databaseURL: "https://agenda-feba3.firebaseio.com",
    projectId: "agenda-feba3",
    storageBucket: "agenda-feba3.appspot.com",
    messagingSenderId: "586002027120",
    appId: "1:586002027120:web:23169e59f1eb937c"
    })// biblioteca
  ],
  providers: [
    AngularFireAuth,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
