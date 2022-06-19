import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransferHistorialPage } from './transfer-historial.page';

const routes: Routes = [
  {
    path: '',
    component: TransferHistorialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransferHistorialPageRoutingModule {}
