import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminCuentasPageRoutingModule } from './admin-cuentas-routing.module';

import { AdminCuentasPage } from './admin-cuentas.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminCuentasPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AdminCuentasPage]
})
export class AdminCuentasPageModule {}
