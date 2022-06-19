import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, IonDatetime } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

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

  signUp(){
    const url = 'http://localhost:3000/auth/signup';
    console.log(this.user);
    console.log(this.names);
    console.log(this.email);
    console.log(this.password);
    console.log(this.fechaNacimiento);
    console.log(this.direccion);
    console.log(this.phone);
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Listo!',
      subHeader: 'Registro con éxito',
      message: 'Tu usuario ha sido registrado con éxito',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  createFormGroup(): FormGroup{
    return new FormGroup({
      user: new FormControl('', [Validators.required, Validators.minLength(2)]),
      names: new FormControl('', [Validators.required, Validators.minLength(2)]),
      email: new FormControl('', [Validators.required, Validators.minLength(2)]),
      password: new FormControl('', [Validators.required, Validators.minLength(4)]),
      fechaNacimiento: new FormControl('', [Validators.required, Validators.minLength(2)]),
      direccion: new FormControl('', [Validators.required, Validators.minLength(2)]),
      phone: new FormControl('', [Validators.required, Validators.minLength(2)]),
    });
  }

}
