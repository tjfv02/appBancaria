import { Component, Input, OnInit, Output } from '@angular/core';
import { TextareaChangeEventDetail } from '@ionic/angular';
import { Cuenta, CuentaAsociada } from '../../interfaces/interfaces';

@Component({
  selector: 'app-transfer-propias',
  templateUrl: './transfer-propias.page.html',
  styleUrls: ['./transfer-propias.page.scss'],
})
export class TransferPropiasPage implements OnInit {

  @Output() cuenta: string;
  @Output() tipoCuenta: string;
  @Output() saldo: number;
  @Input() textareaChangeEventDetail: TextareaChangeEventDetail;
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

  constructor() { }

  ngOnInit() {
    this.cuenta = 'Tito Fajardo';
    this.tipoCuenta = 'Cuenta Corriente';
    this.saldo = 100000;
  }

}
