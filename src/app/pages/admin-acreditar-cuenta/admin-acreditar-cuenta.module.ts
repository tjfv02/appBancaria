import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminAcreditarCuentaPageRoutingModule } from './admin-acreditar-cuenta-routing.module';

import { AdminAcreditarCuentaPage } from './admin-acreditar-cuenta.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminAcreditarCuentaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AdminAcreditarCuentaPage]
})
export class AdminAcreditarCuentaPageModule {}
