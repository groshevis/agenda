import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { ModalController } from '@ionic/angular';
import { AngularFireAuth } from "angularfire2/auth"
import {  Alunos } from "../entidade/alunos"

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {


     alunos: Alunos = new Alunos();

  constructor(
    private banco: AngularFireDatabase,
    private rota: Router,
    private modal: ModalController,
    private afAuth: AngularFireAuth
  ) { }

  ngOnInit() {
  }
  // salvar(){
  //   this.banco.list('contato').push(this.alunos);
  //   this.alunos= new Alunos();
  //   this.rota.navigate(['info-primeiro']);
  //   alert('Cadastro efetuado!');
  // }

  }
