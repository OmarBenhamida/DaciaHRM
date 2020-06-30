import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employe } from '../models/Employes.models';
import { Post } from '../models/Posts.models';
import { Competence } from '../models/Competences.models';

@Injectable({
    providedIn: 'root'
})
export class CompetenceService {
    url = 'http://localhost:8000/api/competences';
    competences: Competence[];
    competence: Competence;

    constructor(private http: HttpClient) { }


    get(id) {
        return this.http.get(this.url + '/' + id);

    }

    getall() {
        this.http.get(this.url).toPromise().then(
            res => {
                this.competences = res as Post[];
            }
        );
    }

    post() {
        return this.http.post(this.url, this.competence);
    }

    put() {
        return this.http.put(this.url + '/' + this.competence.id, this.competence);
    }

    delete() {
        return this.http.delete(this.url + '/' + this.competence.id);
    }
}