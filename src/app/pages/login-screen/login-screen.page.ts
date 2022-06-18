import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.page.html',
  styleUrls: ['./login-screen.page.scss'],
})
export class LoginScreenPage implements OnInit {

  @Input() email: string;
  @Input() password: string;

  constructor() { }

  ngOnInit() {
  }

  signIn(){
    const url = 'http://localhost:3000/auth/login';
    console.log(this.email);
    console.log(this.password);

  }
}
