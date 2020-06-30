import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employe } from '../models/Employes.models';
import { Indimnite } from '../models/Indimnites.models';

@Injectable({
    providedIn: 'root'
})
export class IndimniteService {
    url = 'http://localhost:8000/api/indimnites';
    indemnites: Indimnite[];
    indemnite: Indimnite;

    constructor(private http: HttpClient) { }


    get(id) {
        return this.http.get(this.url + '/' + id);

    }

    getall() {
        this.http.get(this.url).toPromise().then(
            res => {
                this.indemnites = res as Indimnite[];
            }
        );
    }

    post() {
        return this.http.post(this.url, this.indemnite);
    }

    put() {
        return this.http.put(this.url + '/' + this.indemnite.id, this.indemnite);
    }

    delete() {
        return this.http.delete(this.url + '/' + this.indemnite.id);
    }
}
