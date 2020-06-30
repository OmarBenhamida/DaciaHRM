import { Employe } from './Employes.models';

export class Absence {

    id: number;
    dateRetard: Date;
    type: boolean;
    // tslint:disable-next-line:variable-name
    justification: string;
    idemploye: number;
    employe: Employe;
}
