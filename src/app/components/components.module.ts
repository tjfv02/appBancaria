import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CuentaComponent } from './cuenta/cuenta.component';
import { CuentasComponent } from './cuentas/cuentas.component';




@NgModule({
  declarations: [
    CuentaComponent,
    CuentasComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    CuentasComponent
  ]
})
export class ComponentsModule { }