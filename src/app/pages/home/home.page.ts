import { Component, OnInit } from '@angular/core';
import { ActionSheetButton, ActionSheetController, Platform } from '@ionic/angular';
import { Cuenta } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public cuentas: Cuenta[] = [{
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
  ideas: string[] = ['Spiderman', 'Avenger', 'La vida es bella'];

  constructor(
    private actionSheetCtrl: ActionSheetController,
    private platform: Platform
    ) { }

  async onAbrirMenu(){
    console.log('mostrar opciones')

    const normalBtns: ActionSheetButton[] = [
      {
        text: 'Historial',
        icon: 'refresh-outline',
        //agregar funcion de mostrar historial de la cuenta
      },
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
  ]

  const actionSheet = await this.actionSheetCtrl.create({
    header: 'Opciones',
    buttons: normalBtns
  });

  await actionSheet.present();
  }

  ngOnInit() {
  }

  loadData(){
    console.log('cargar mas datos');
  }

}
