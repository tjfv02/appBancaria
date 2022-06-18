import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { IonDatetime } from '@ionic/angular';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  usuario: User;
  @Input() user: string;
  @Input() names: string;
  @Input() email: string;
  @Input() password: string;
  @Input() fechaNacimiento: IonDatetime;
  @Input() direccion: string;
  @Input() phone: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  signUp() {

    console.log(this.user);
    console.log(this.names);
    console.log(this.email);
    console.log(this.password);
    console.log(this.fechaNacimiento);
    console.log(this.direccion);
    console.log(this.phone);
    
    this.usuario.user = this.user;
    this.usuario.name = this.names;
     this.usuario.email = this.email;
     this.usuario.password = this.password;
     this.usuario.fechaNac = this.fechaNacimiento;
     this.usuario.direccion = this.direccion;
     this.usuario.phone =  this.phone;
     this.authService
     .signUp(this.usuario)
   .subscribe((msg) => console.log(msg));
  }

}
