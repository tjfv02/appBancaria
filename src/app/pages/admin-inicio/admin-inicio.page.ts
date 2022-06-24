import { Component, OnInit } from '@angular/core';
import { ActionSheetButton, ActionSheetController, Platform } from '@ionic/angular';
import { Cuenta } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-admin-inicio',
  templateUrl: './admin-inicio.page.html',
  styleUrls: ['./admin-inicio.page.scss'],
})
export class AdminInicioPage implements OnInit {


  constructor(private actionSheetCtrl: ActionSheetController, private platform: Platform) { }

  ngOnInit() {
  }

  async onAbrirMenu(){
    const normalBtns: ActionSheetButton[] = [
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
