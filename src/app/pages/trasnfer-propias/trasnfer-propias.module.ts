import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrasnferPropiasPageRoutingModule } from './trasnfer-propias-routing.module';

import { TrasnferPropiasPage } from './trasnfer-propias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrasnferPropiasPageRoutingModule
  ],
  declarations: [TrasnferPropiasPage]
})
export class TrasnferPropiasPageModule {}
