import { Employe } from './Employes.models';
import { Formation } from './Formations.models';

export class EmployeFormation {
    id: number;
    idemploye: number;
    idformation: number;
    employe: Employe;
    formation: Formation;
}
