import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(private authService: AuthService) { }

   user: User;
  @Input() email: string;
  @Input() name: string;
  @Input() password: string;
  @Input() phone: number;

  ngOnInit() {
  }

  signup():void {
    this.user.name = this.name;
    this.user.email = this.email;
    this.user.phone = this.phone;
    console.log(this.user);
    // this.authService
    // .signUp(this.user)
    // .subscribe((msg) => console.log(msg));
  }

}
