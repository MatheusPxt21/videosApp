import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'gato-de-botas',
    loadChildren: () => import('./filmes/gato-de-botas/gato-de-botas.module').then( m => m.GatoDeBotasPageModule)
  },
  {
    path: 'avatar-caminho-da-agua',
    loadChildren: () => import('./filmes/avatar-caminho-da-agua/avatar-caminho-da-agua.module').then( m => m.AvatarCaminhoDaAguaPageModule)
  },
  {
    path: 'dados-filme',
    loadChildren: () => import('./dados-filme/dados-filme.module').then( m => m.DadosFilmePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
