import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminAcreditarCuentaPage } from './admin-acreditar-cuenta.page';

const routes: Routes = [
  {
    path: '',
    component: AdminAcreditarCuentaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminAcreditarCuentaPageRoutingModule {}
