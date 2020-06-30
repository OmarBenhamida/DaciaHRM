import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employe } from '../models/Employes.models';
import { Indimnite } from '../models/Indimnites.models';
import { EmployePost } from '../models/EmployePosts.models';
import { Absence } from '../models/Absences.models';
import { Retard } from '../models/Retards.models';
import { Post } from '../models/Posts.models';

@Injectable({
    providedIn: 'root'
})
export class FichePaieService {

    url = 'http://localhost:8000/api';
    o = {
        mois: 0,
        annee: 0,
        idemploye: 0,
        employe: Employe,
        post: Post,
        abs: 0,
        rts: 0,
      }

    constructor(private http: HttpClient) { }

    get(id) {
        return this.http.get<EmployePost>(this.url + '/employeposts/getPostByIdemploye/' + id);
    }

    countAbsByUser(month, id) {
        return this.http.get<number>(this.url + '/absences/countAbsByUser/' + month + '/' + id);
    }

    sumAbsByUser(month, id) {
        return this.http.get<number>(this.url + '/retards/sumAbsByUser/' + month + '/' + id);
    }

}
