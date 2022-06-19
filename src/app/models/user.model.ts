import { IonDatetime } from '@ionic/angular';

export interface User {
    id: number;
    user: string;
    name: string;
    email: string;
    password: string;
    fechaNac: IonDatetime;
    direccion: string;
    phone: string;
}


