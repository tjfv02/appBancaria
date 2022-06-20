import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-transfer-terceros',
  templateUrl: './transfer-terceros.page.html',
  styleUrls: ['./transfer-terceros.page.scss'],
})
export class TransferTercerosPage implements OnInit {
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
