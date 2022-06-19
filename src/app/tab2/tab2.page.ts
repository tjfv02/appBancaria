import { Component } from '@angular/core';
import { ActionSheetButton, ActionSheetController, Platform } from '@ionic/angular';
import { Cuenta } from '../interfaces/interfaces';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public cuentas: Cuenta[] = [{
    noCuenta: 122,
    monAho: false,
    nombre: 'CristianAz',
    monto: 1500,
    bloqueada: false
  },
  {
    noCuenta: 123,
    monAho: false,
    nombre: 'CristianAz',
    monto: 1234,
    bloqueada: false
  },
  {
    noCuenta: 124,
    monAho: true,
    nombre: 'CristianAz',
    monto: 900,
    bloqueada: false
  },
  {
    noCuenta: 125,
    monAho: true,
    nombre: 'CristianAz',
    monto: 760,
    bloqueada: false
  }];
  constructor(private actionSheetCtrl: ActionSheetController, private platform: Platform) {}

  async onAbrirMenu(){
    const normalBtns: ActionSheetButton[] = [
      // {
      //   text: 'Historial',
      //   icon: 'refresh-outline',
      //   //agregar funcion de mostrar historial de la cuenta
      // },
      {
        text: 'Bloquear',
        icon: 'alert-circle-outline',
        //agregar funcion de bloquear
      },
      {
        text: 'Cancelar',
        icon: 'close-outline',
        role: 'cancel'
      }
    ];

    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Opciones',
      buttons: normalBtns
    });

    await actionSheet.present();
  }
}
