import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrasnferTercerosPageRoutingModule } from './trasnfer-terceros-routing.module';

import { TrasnferTercerosPage } from './trasnfer-terceros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrasnferTercerosPageRoutingModule
  ],
  declarations: [TrasnferTercerosPage]
})
export class TrasnferTercerosPageModule {}
