import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar-cuenta',
  templateUrl: './agregar-cuenta.page.html',
  styleUrls: ['./agregar-cuenta.page.scss'],
})
export class AgregarCuentaPage implements OnInit {

  @Input() numeroCuenta: number;

  constructor() { }

  ngOnInit() {
  }

  agregarCuenta() {}
}
