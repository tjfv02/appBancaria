import { Component } from '@angular/core';
import { Cuenta } from '../interfaces/interfaces';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

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

  constructor() {}

  loadData(){
    console.log('cargar mas datos');
  }

}
