import { User } from './../../models/user.model';
import { Component, OnInit } from '@angular/core';
import { Transferencia } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-transfer-historial',
  templateUrl: './transfer-historial.page.html',
  styleUrls: ['./transfer-historial.page.scss'],
})
export class TransferHistorialPage implements OnInit {

  public transferencias: Transferencia[] = [
    {
      user: 'TitoF',
      numeroCuenta: 157845,
      monto: 1000,
      tipoTransfer: true,
      monAho: true,
      estado: 'activo'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
