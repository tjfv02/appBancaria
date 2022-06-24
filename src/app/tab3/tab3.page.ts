import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { User } from '../interfaces/interfaces';
import { EditarPerfilPage } from '../pages/editar-perfil/editar-perfil.page';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

public profileUsers: User[] = [{
    user: 'tjfv02',
    password: '123456',
    nombre: 'Tito Fajardo',
    email: 'tjfv02@gmail.com',
    telefono: '54835926',
    direccion: '8av 4-68 Z4',
    fechaNacimiento: '28/01/2002',
    fechaRegistro: '28/01/2002',
    cuentas: [{
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
    }
    ],
    cuentasAsociadas: [{
      noCuenta: 122,
      monAho: false,
      nombre: 'CristianAz',
    },
    {
      noCuenta: 123,
      monAho: false,
      nombre: 'CristianAz',
    }
    ]
  }
];

  constructor(private modalController: ModalController) {}

  async editarPerfil(){
    const modal = await this.modalController.create({
      component: EditarPerfilPage,
      componentProps: this.profileUsers[0]
    });
    await modal.present();
  }

}
