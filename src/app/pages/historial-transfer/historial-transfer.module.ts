import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistorialTransferPageRoutingModule } from './historial-transfer-routing.module';

import { HistorialTransferPage } from './historial-transfer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistorialTransferPageRoutingModule
  ],
  declarations: [HistorialTransferPage]
})
export class HistorialTransferPageModule {}
