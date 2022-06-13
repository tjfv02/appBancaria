import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrasnferPropiasPage } from './trasnfer-propias.page';

const routes: Routes = [
  {
    path: '',
    component: TrasnferPropiasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrasnferPropiasPageRoutingModule {}
