import { Component, OnInit, Output } from '@angular/core';
import { Cuenta } from '../../interfaces/interfaces';

@Component({
  selector: 'app-transfer-propias',
  templateUrl: './transfer-propias.page.html',
  styleUrls: ['./transfer-propias.page.scss'],
})
export class TransferPropiasPage implements OnInit {

  @Output() cuenta: string;
  @Output() tipoCuenta: string;
  @Output() saldo: number;

  constructor() { }

  ngOnInit() {
    this.cuenta = 'Tito Fajardo';
    this.tipoCuenta = 'Cuenta Corriente';
    this.saldo = 100000;
  }

}
