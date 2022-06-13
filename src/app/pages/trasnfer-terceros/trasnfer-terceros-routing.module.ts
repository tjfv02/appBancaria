import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrasnferTercerosPage } from './trasnfer-terceros.page';

const routes: Routes = [
  {
    path: '',
    component: TrasnferTercerosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrasnferTercerosPageRoutingModule {}
