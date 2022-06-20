import { Component, OnInit } from '@angular/core';
import { TextareaChangeEventDetail } from '@ionic/angular';
import { CuentaAsociada } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-transfer-cuentas',
  templateUrl: './transfer-cuentas.page.html',
  styleUrls: ['./transfer-cuentas.page.scss'],
})
export class TransferCuentasPage implements OnInit {

  public cuentasAsociadas: CuentaAsociada[] = [
    {
    noCuenta: 1234,
    monAho: false,//false = monetaria, true = ahorro
    nombre: 'Tito Fajardo'
    },
    {
      noCuenta: 3456,
      monAho: true,//false = monetaria, true = ahorro
      nombre: 'Abner Fajardo'
    }
  ];
  textArea: TextareaChangeEventDetail;

  constructor() { }

  ngOnInit() {
  }

}
