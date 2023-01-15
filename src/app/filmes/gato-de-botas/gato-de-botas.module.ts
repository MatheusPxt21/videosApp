import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GatoDeBotasPageRoutingModule } from './gato-de-botas-routing.module';

import { GatoDeBotasPage } from './gato-de-botas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GatoDeBotasPageRoutingModule
  ],
  declarations: [GatoDeBotasPage]
})
export class GatoDeBotasPageModule {}
