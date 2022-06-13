import { Component, Input, OnInit } from '@angular/core';
import { ActionSheetButton, ActionSheetController, Platform } from '@ionic/angular';
import { Cuenta } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styleUrls: ['./cuenta.component.scss'],
})
export class CuentaComponent implements OnInit {

  @Input() cuenta: Cuenta;

   cuentas: Cuenta[] = [{
    NoCuenta: 122,
    MonAho: false,
    Nombre: 'CristianAz',
    Monto: 1500,
    Bloqueada: false
  },
  {
    NoCuenta: 123,
    MonAho: false,
    Nombre: 'CristianAz',
    Monto: 1234,
    Bloqueada: false
  },
  {
    NoCuenta: 124,
    MonAho: true,
    Nombre: 'CristianAz',
    Monto: 900,
    Bloqueada: false
  },
  {
    NoCuenta: 125,
    MonAho: true,
    Nombre: 'CristianAz',
    Monto: 760,
    Bloqueada: false
  }];

  constructor(
    private actionSheetCtrl: ActionSheetController,
    private platform: Platform
  ) { }

  ngOnInit() {}

    async onAbrirMenu(){
      console.log('mostrar opciones')

      const normalBtns: ActionSheetButton[] = [
        {
          text: 'Historial',
          icon: 'refresh-outline',
          handler: () => {
            console.log('Historial clicked');
          }
          //agregar funcion de mostrar historial de la cuenta
        },
        {
          text: 'Bloquear',
          icon: 'alert-circle-outline',
          handler: () => {
            console.log('Bloquear clicked');
          }
          //agregar funcion de bloquear
        },
        {
          text: 'Cancelar',
          icon: 'close-outline',
          role: 'cancel'
        }
    ]

    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Opciones',
      buttons: normalBtns
    });

    await actionSheet.present();
    }

    mostrarCuenta(){
      console.log('mostrar data de la cuenta');
    }

}
