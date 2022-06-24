import { Component, Input, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-admin-acreditar-cuenta',
  templateUrl: './admin-acreditar-cuenta.page.html',
  styleUrls: ['./admin-acreditar-cuenta.page.scss'],
})
export class AdminAcreditarCuentaPage implements OnInit {

  @Input() monto: string ;

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  acreditar(){
    console.log('se ha acreditado: ' );
    console.log(this.monto);

  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Listo!',
      subHeader: 'Acreditación con éxito',
      message: 'Se ha acreditado con éxito',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

}
