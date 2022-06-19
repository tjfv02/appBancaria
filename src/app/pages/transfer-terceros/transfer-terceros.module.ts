import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransferTercerosPageRoutingModule } from './transfer-terceros-routing.module';

import { TransferTercerosPage } from './transfer-terceros.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransferTercerosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TransferTercerosPage]
})
export class TransferTercerosPageModule {}
