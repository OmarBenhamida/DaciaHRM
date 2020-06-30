import { Competence } from './Competences.models';
import { Employe } from './Employes.models';

export class EmployeCompetence {
    id: number;
    idemploye: number;
    idcompetence: number;
    employe: Employe;
    competence: Competence;

}
