import { Employe } from './Employes.models';

export class Retard {

    id: number;
    dateRetard: Date;
    type: boolean;
    // tslint:disable-next-line:variable-name
    nb_heure: number;
    justification: string;
    idemploye: number;
    employe: Employe;
}
