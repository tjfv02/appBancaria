import { Component, Input, OnInit } from '@angular/core';
import { AlertController, IonDatetime } from '@ionic/angular';

@Component({
  selector: 'app-admin-crear-cuenta',
  templateUrl: './admin-crear-cuenta.page.html',
  styleUrls: ['./admin-crear-cuenta.page.scss'],
})
export class AdminCrearCuentaPage implements OnInit {
  @Input() user: string;
  @Input() names: string;
  @Input() email: string;
  @Input() password: string;
  @Input() fechaNacimiento: IonDatetime;
  @Input() direccion: string;
  @Input() phone: string;

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Listo!',
      subHeader: 'Registro con éxito',
      message: 'El usuario ha sido registrado con éxito',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  signUp(){
    console.log(this.user);
    console.log(this.names);
    console.log(this.email);
    console.log(this.password);
    console.log(this.fechaNacimiento);
    console.log(this.direccion);
    console.log(this.phone);
  }

}
