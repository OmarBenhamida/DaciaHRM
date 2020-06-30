import { Employe } from './Employes.models';
import { Contrat } from './Contrats.models';

export class Employecontrat {
    id: number;
    idemploye: number;
    idcontrat: number;
    dateSignature: Date;
    employe: Employe;
    contrat: Contrat;
}
