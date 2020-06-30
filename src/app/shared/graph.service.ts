import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employe } from '../models/Employes.models';

@Injectable({
    providedIn: 'root'
})
export class GraphService {
    url = 'http://localhost:8000/api';
    employes: Employe[];
    employe: Employe;

    constructor(private http: HttpClient) { }


    get() {
        return this.http.get(this.url + '/employes/getCountSexe');

    }

    getcompetence() {
        return this.http.get(this.url + '/employecompetences/getCompetence');

    }

    getCountSexeParAn() {
        return this.http.get(this.url + '/employes/getCountSexeParAn');


    }
    getPost() {
        return this.http.get(this.url + '/employeposts/getPost');

    }
    getContrat() {
        return this.http.get(this.url + '/employecontrats/getContrat');

    }



}
