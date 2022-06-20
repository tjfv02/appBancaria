import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransferCuentasPage } from './transfer-cuentas.page';

const routes: Routes = [
  {
    path: '',
    component: TransferCuentasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransferCuentasPageRoutingModule {}
