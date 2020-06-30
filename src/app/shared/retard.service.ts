import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Retard } from '../models/Retards.models';

@Injectable({
    providedIn: 'root'
})
export class RetardService {
    url = 'http://localhost:8000/api/retards';
   retards: Retard[];
    retard: Retard;

    constructor(private http: HttpClient) { }


    get(id) {
        return this.http.get(this.url + '/' + id);

    }

    getall() {
        return this.http.get(this.url + '/getAll');
     }

    post() {
        delete this.retard.employe;

        return this.http.post(this.url, this.retard);
    }

    put() {
        delete this.retard.employe;

        return this.http.put(this.url + '/' + this.retard.id, this.retard);
    }

    delete() {
        return this.http.delete(this.url + '/' + this.retard.id);
    }
}