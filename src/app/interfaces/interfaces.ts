export interface Cuenta{
    NoCuenta: number;
    MonAho: boolean;//false = monetaria, true = ahorro
    Nombre: string;
    Monto: number;
    Bloqueada: boolean;
}