import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransferHistorialPageRoutingModule } from './transfer-historial-routing.module';

import { TransferHistorialPage } from './transfer-historial.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransferHistorialPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TransferHistorialPage]
})
export class TransferHistorialPageModule {}
