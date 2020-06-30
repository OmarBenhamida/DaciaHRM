import { Employe } from './Employes.models';

export class Conge {

    id: number;
    datedebut: Date;
    datefin: Date;
    type: string;
    etat: string;

    idemploye: number;
    employe : Employe;
}
