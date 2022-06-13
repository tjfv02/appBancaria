import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistorialTransferPage } from './historial-transfer.page';

const routes: Routes = [
  {
    path: '',
    component: HistorialTransferPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistorialTransferPageRoutingModule {}
