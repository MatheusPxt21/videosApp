import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AvatarCaminhoDaAguaPage } from './avatar-caminho-da-agua.page';

const routes: Routes = [
  {
    path: '',
    component: AvatarCaminhoDaAguaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AvatarCaminhoDaAguaPageRoutingModule {}
