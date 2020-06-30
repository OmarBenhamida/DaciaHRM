import { Employe } from './Employes.models';

export class DemandeConge {

    id: number;
    datedebut: Date;
    dateFin: Date;
    type: string;
    etat: string;
    idemploye: number;
    employe: Employe;

}
