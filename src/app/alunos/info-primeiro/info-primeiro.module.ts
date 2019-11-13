import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InfoPrimeiroPage } from './info-primeiro.page';

const routes: Routes = [
  {
    path: '',
    component: InfoPrimeiroPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InfoPrimeiroPage]
})
export class InfoPrimeiroPageModule {}
