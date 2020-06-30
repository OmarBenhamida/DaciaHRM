import { Employe } from './Employes.models';

export class OrdreMission {

    id: number;
    Libelle: string;
    lieu: string;
    datedebut: Date;
    datefin: Date;
    idemploye: number;
    employe: Employe;

}
