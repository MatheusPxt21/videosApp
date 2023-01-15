import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AvatarCaminhoDaAguaPageRoutingModule } from './avatar-caminho-da-agua-routing.module';

import { AvatarCaminhoDaAguaPage } from './avatar-caminho-da-agua.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AvatarCaminhoDaAguaPageRoutingModule
  ],
  declarations: [AvatarCaminhoDaAguaPage]
})
export class AvatarCaminhoDaAguaPageModule {}
