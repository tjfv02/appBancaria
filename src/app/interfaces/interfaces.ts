export interface Cuenta{
    noCuenta: number;
    monAho: boolean;//false = monetaria, true = ahorro
    nombre: string;
    monto: number;
    bloqueada: boolean;
}

export interface Transferencia {
    user: string; //el que envió la transferencia
    numeroCuenta: number;
    monto: number;
    tipoTransfer: boolean; //false = propias, true = terceros
    monAho: boolean;//false = monetaria, true = ahorro
    estado: string;
}

export interface CuentaAsociada{
    noCuenta: number;
    monAho: boolean;//false = monetaria, true = ahorro
    nombre: string;
}

interface TextareaChangeEventDetail {
    value?: string | null;
  }

export interface User{
    user: string;
    password: string;
    nombre: string;
    email: string;
    telefono: string;
    direccion: string;
    fechaNacimiento: string;
    fechaRegistro: string;
    cuentas: Cuenta[];
    cuentasAsociadas: CuentaAsociada[];
}
