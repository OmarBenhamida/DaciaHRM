import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Employeretard } from '../models/EmployeRetards.models';

@Injectable({
    providedIn: 'root'
})
export class EmployeRetardService {
    url = 'http://localhost:8000/api/employeretards';
    retards: Employeretard[];
    retard: Employeretard;

    constructor(private http: HttpClient) { }


    get(id) {
        return this.http.get(this.url + '/' + id);

    }

    getall() {
        this.http.get(this.url).toPromise().then(
            res => {
                this.retards = res as Employeretard[];
            }
        );
    }

    post() {
        return this.http.post(this.url, this.retard);
    }

    put() {
        return this.http.put(this.url + '/' + this.retard.id, this.retard);
    }

    delete() {
        return this.http.delete(this.url + '/' + this.retard.id);
    }
}