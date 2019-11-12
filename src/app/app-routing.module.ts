import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {ListarContatoComponent} from './contato/listar-contato/listar-contato.component';
import {SalvarContatoComponent} from './contato/salvar-contato/salvar-contato.component';
import {NotificacaoComponent} from './notificacao/notificacao.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'listar-contato', component:ListarContatoComponent},
  { path: 'salvar-contato', component:SalvarContatoComponent},
  { path: 'salas', loadChildren: './salas/salas.module#SalasPageModule' },
  {path: 'notificacao', component: NotificacaoComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
