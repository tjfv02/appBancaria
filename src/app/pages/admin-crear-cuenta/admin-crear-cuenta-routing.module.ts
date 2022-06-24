import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminCrearCuentaPage } from './admin-crear-cuenta.page';

const routes: Routes = [
  {
    path: '',
    component: AdminCrearCuentaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminCrearCuentaPageRoutingModule {}
