import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarCuentaPage } from './agregar-cuenta.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarCuentaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarCuentaPageRoutingModule {}
