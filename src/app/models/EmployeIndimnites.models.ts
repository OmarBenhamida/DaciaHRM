import { Employe } from './Employes.models';
import { Indimnite } from './Indimnites.models';

export class EmployeIndimnite {
    id: number;
    idemploye: number;
    idindimnite: number;
    employe: Employe;
    indimnite: Indimnite;
}
