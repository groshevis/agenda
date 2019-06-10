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

@NgModule({
  declarations: [AppComponent, SalvarContatoComponent, ListarContatoComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule,
    AngularFireModule.initializeApp({ //configuração
      apiKey: "AIzaSyBj_KZVFZOOpUvz-47o6ti_vw2FOh2MeVQ",
      authDomain: "teste-f376a.firebaseapp.com",
      databaseURL: "https://teste-f376a.firebaseio.com",
      projectId: "teste-f376a",
      storageBucket: "teste-f376a.appspot.com",
      messagingSenderId: "941183180705",
      appId: "1:941183180705:web:8e6674d8b43207b0"
    }), AngularFireDatabaseModule// biblioteca
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
