import { Component, OnInit } from '@angular/core';
import { Cuenta } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-admin-cuentas',
  templateUrl: './admin-cuentas.page.html',
  styleUrls: ['./admin-cuentas.page.scss'],
})
export class AdminCuentasPage implements OnInit {
  public cuentas: Cuenta[] = [{
    noCuenta: 122,
    monAho: false,
    nombre: 'CristianAz',
    monto: 1500,
    bloqueada: true
  },
  {
    noCuenta: 123,
    monAho: false,
    nombre: 'CristianAz',
    monto: 1234,
    bloqueada: false
  },
  {
    noCuenta: 124,
    monAho: true,
    nombre: 'CristianAz',
    monto: 900,
    bloqueada: false
  },
  {
    noCuenta: 125,
    monAho: true,
    nombre: 'CristianAz',
    monto: 760,
    bloqueada: false
  }];

  constructor() { }

  ngOnInit() {
  }

  cambiarEstadoCuenta(cuenta: Cuenta) {
    cuenta.bloqueada = !cuenta.bloqueada;
  }

}
