import { Component, Input, OnInit } from '@angular/core';
import { IonDatetime } from '@ionic/angular';

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

  constructor() { }

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

}
