import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransferCuentasPageRoutingModule } from './transfer-cuentas-routing.module';

import { TransferCuentasPage } from './transfer-cuentas.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransferCuentasPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TransferCuentasPage]
})
export class TransferCuentasPageModule {}
