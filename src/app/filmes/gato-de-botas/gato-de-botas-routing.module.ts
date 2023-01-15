import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GatoDeBotasPage } from './gato-de-botas.page';

const routes: Routes = [
  {
    path: '',
    component: GatoDeBotasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GatoDeBotasPageRoutingModule {}
