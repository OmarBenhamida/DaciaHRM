import { Employe } from './Employes.models';

export class Diplome {

    id: number;
    ref: string;
    libelle: string;
    idemploye: number;
    employe: Employe;
}
