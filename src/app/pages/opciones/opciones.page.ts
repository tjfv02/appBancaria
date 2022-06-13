import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-opciones',
  templateUrl: './opciones.page.html',
  styleUrls: ['./opciones.page.scss'],
})
export class OpcionesPage implements OnInit {

  constructor(private actionSheetCtrl: ActionSheetController) { }

  ngOnInit() {
  }

  transferPropias() {
    this.mostrarTransfPropias();
   }

   transferTerceros() {
    this.mostrarTransferTerceros();
   }

   historialTransferencias() {
    this.mostrarHistorialTransferencias();
   }

   editarPerfil() {
    this.mostrarEditarPerfil();
   }

   mostrarTransfPropias(){
      console.log('Mostrar cuentas propias a transferir');
   }

   mostrarTransferTerceros(){
      console.log('Mostrar cuentas propias a transferir');
  }

  mostrarHistorialTransferencias(){
  console.log('Mostrar cuentas propias a transferir');
  }

  mostrarEditarPerfil(){
    console.log('Mostrar cuentas propias a transferir');
  }

}
