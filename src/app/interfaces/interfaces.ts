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
