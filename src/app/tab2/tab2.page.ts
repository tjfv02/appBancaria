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
    Monto: 15,
    Bloqueada: false
  }];
  ideas: string[] = ['Spiderman', 'Avenger', 'La vida es bella'];

  constructor() {}

  loadData(){
    console.log('cargar mas datos');
  }

}
