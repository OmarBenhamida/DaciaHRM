import { Post } from './Posts.models';
import { Employe } from './Employes.models';

export class EmployePost {
    id: number;
    idemploye: number;
    idpost: number;
    datedebut: Date;
    dateFin: Date;

    post: Post;
    employe: Employe;
}
