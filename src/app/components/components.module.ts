import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CuentaComponent } from './cuenta/cuenta.component';
import { CuentasComponent } from './cuentas/cuentas.component';
import { HeaderComponent } from './header/header.component';




@NgModule({
  declarations: [
    CuentaComponent,
    CuentasComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    CuentasComponent,
    HeaderComponent
  ]
})
export class ComponentsModule { }