import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransferTercerosPage } from './transfer-terceros.page';

const routes: Routes = [
  {
    path: '',
    component: TransferTercerosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransferTercerosPageRoutingModule {}
