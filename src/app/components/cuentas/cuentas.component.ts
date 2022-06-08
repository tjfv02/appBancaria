import { Component, Input, OnInit } from '@angular/core';
import { Cuenta } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-cuentas',
  templateUrl: './cuentas.component.html',
  styleUrls: ['./cuentas.component.scss'],
})
export class CuentasComponent implements OnInit {

  @Input() cuentas: Cuenta[] = [];

  constructor() { }

  ngOnInit() {}

}
