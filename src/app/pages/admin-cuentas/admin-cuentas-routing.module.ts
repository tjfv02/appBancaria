import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminCuentasPage } from './admin-cuentas.page';

const routes: Routes = [
  {
    path: '',
    component: AdminCuentasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminCuentasPageRoutingModule {}
