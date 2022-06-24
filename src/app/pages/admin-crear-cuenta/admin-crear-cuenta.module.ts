import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminCrearCuentaPageRoutingModule } from './admin-crear-cuenta-routing.module';

import { AdminCrearCuentaPage } from './admin-crear-cuenta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminCrearCuentaPageRoutingModule
  ],
  declarations: [AdminCrearCuentaPage]
})
export class AdminCrearCuentaPageModule {}
