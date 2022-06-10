import { Component, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit() {
  }

  loadData(){
    console.log('cargar mas datos');
  }

}
