import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email!: string;
  senha!: string;

  constructor(public toastController: ToastController, private route: Router) { }

  ngOnInit() {
  }

  login(){
    if(this.email === 'teste.com' && this.senha === '123456'){
      this.route.navigateByUrl('/tabs/tab1');
      this.presentToast('Bem Vindo!', 'success');
    }else{
      this.presentToast('ERRO!', 'danger');
    }
  }

  async presentToast(texto: string, cor: string){
    const toast = await this.toastController.create({
      message: texto,
      color: cor,
      duration: 2000
    });
  }

}
