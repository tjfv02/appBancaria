import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'opciones',
    loadChildren: () => import('./pages/opciones/opciones.module').then( m => m.OpcionesPageModule)
  },
  {
    path: 'trasnfer-propias',
    loadChildren: () => import('./pages/trasnfer-propias/trasnfer-propias.module').then( m => m.TrasnferPropiasPageModule)
  },
  {
    path: 'trasnfer-terceros',
    loadChildren: () => import('./pages/trasnfer-terceros/trasnfer-terceros.module').then( m => m.TrasnferTercerosPageModule)
  },
  {
    path: 'historial-transfer',
    loadChildren: () => import('./pages/historial-transfer/historial-transfer.module').then( m => m.HistorialTransferPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
