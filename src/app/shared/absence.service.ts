import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employe } from '../models/Employes.models';
import { Post } from '../models/Posts.models';
import { Competence } from '../models/Competences.models';
import { Conge } from '../models/Conges.models';
import { Absence } from '../models/Absences.models';

@Injectable({
    providedIn: 'root'
})
export class AbsenceService {
    url = 'http://localhost:8000/api/absences';
    absences: Absence[];
    absence: Absence;

    constructor(private http: HttpClient) { }


    get(id) {
        return this.http.get(this.url + '/' + id);

    }

    getall() {
        return this.http.get(this.url + '/getAll');
     }

    post() {
        delete this.absence.employe;

        return this.http.post(this.url, this.absence);
    }

    put() {
        delete this.absence.employe;

        return this.http.put(this.url + '/' + this.absence.id, this.absence);
    }

    delete() {
        return this.http.delete(this.url + '/' + this.absence.id);
    }
}