import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransferPropiasPage } from './transfer-propias.page';

const routes: Routes = [
  {
    path: '',
    component: TransferPropiasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransferPropiasPageRoutingModule {}
