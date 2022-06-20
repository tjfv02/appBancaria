import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarCuentaPageRoutingModule } from './agregar-cuenta-routing.module';

import { AgregarCuentaPage } from './agregar-cuenta.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarCuentaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AgregarCuentaPage]
})
export class AgregarCuentaPageModule {}
