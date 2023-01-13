import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public alertController: AlertController, public toastController: ToastController) {}

  async AlertaCurtirFilme() {
    const alert = await this.alertController.create({
      header: 'Alerta de Confirmação!',
      message: 'Realmente deseja CURTIR esse filme?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          },
        },
        {
          text: 'SIM, CURTIR',
          handler: () => {
            //console.log('Confirm Okay');
            this.presentToast();
          },
        },
      ],
    });

    await alert.present();
  }


  async AlertaDescurtirFilme() {
    const alert = await this.alertController.create({
      header: 'Alerta de Confirmação!',
      message: 'Realmente deseja DESCURTIR esse filme?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          },
        },
        {
          text: 'SIM, DESCURTIR',
          handler: () => {
            /*console.log('Confirm Okay');*/
            this.presentToast();
          },
        },
      ],
    });

    await alert.present();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Solicitação Confirmada',
      duration: 2000,
      animated: true,
      color: 'light',
      position: 'bottom'


    });
    toast.present();
  }

}
