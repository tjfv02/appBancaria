import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransferPropiasPageRoutingModule } from './transfer-propias-routing.module';

import { TransferPropiasPage } from './transfer-propias.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransferPropiasPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TransferPropiasPage]
})
export class TransferPropiasPageModule {}
